# 프로젝트 소개

![ezgif com-optimize](https://github.com/totter15/pre-onboarding-11th-3-15/assets/71440070/bff52128-853e-4caf-a369-60e79db31372)

<img width="1492" alt="스크린샷 2023-08-01 오후 7 35 12" src="https://github.com/totter15/pre-onboarding-11th-3-15/assets/71440070/70e2956d-8c4c-4479-ae18-8aed58214006">

[원티드 프리온보딩 인틴십]에서 3주차에 진행한 과제입니다.

GitHub REST API를 이용해 [facebook / react](https://github.com/facebook/react/issues)의 레퍼지토리에서 이슈리스트를 가져오고 무한 스크롤 기능으로 구현한 웹사이트입니다. 리스트의 5번째에는 광고를 넣어 관리해주었습니다.

**배포 링크**

https://pre-onboarding-11th-3-15.vercel.app/

## 기술 스택

HTML, CSS, Javascript, Typescript, React, Git, Redux Toolkit

## 폴더 구조

<pre>
.
├── apis            
├── components      
│   ├── common
│   └── issueList
├── hooks
├── interfaces
├── pages
├── routers
└── store
</pre>

## 주요 기능 구현

### React Router를 이용해 페이지 라우팅 기능을 구현

```js
//App.tsx
<Wrapper>
      <Header />
      <Outlet />
</Wrapper>


//Router.tsx
<Route path="/" element={<App />} errorElement={<div>error</div>}>
      <Route index element={<IssueList />} />
      <Route path="issue" element={<IssueList />} />
      <Route
        index
        path="issue/:issueNumber"
        element={<Issue />}
        loader={async ({ params }: any): Promise<IssueResponseDataType> => {
          return await getIssue(params.issueNumber * 1);
        }}
        errorElement={<div>issue error</div>}
      />
</Route>
```

root가 되는 App페이지에 `Outlet`과 `Header`를 이용해 공통 헤더를 구현해주었습니다.

issue 가져오기시에 react-router에 있는 `loader`를 이용해 router가 rendering되기 전에 data를 가져오고 이때 오류 발생시 `errorElement`의 컴포넌트가 랜더링 되게 했습니다.

### Redux Toolkit을 이용해 상태관리

```js
const issueSlice = createSlice({
  name: 'issue',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getList.fulfilled, (state, action) => {
      // 광고가 들어갈 index갯수 계산
      const adsIndex = Array(PER_PAGE / 4).fill(0);
      let newAddedList: IssueListType = action.payload;

      // 광고 넣어주기
      adsIndex.forEach((_, index) => newAddedList.splice((index + 1) * 4 + index, 0, ads(index)));

      state.list = [...state.list, ...action.payload];
      state.index = state.index + 1;
      state.loading = false;
    });
  },
});
```

redux toolkit의 `createAsyncThunk`를 이용하여 api 데이터를 불러오고 불러온 데이터에 광고를 삽입하여 state에 추가해주었습니다.

### IntersectionObserver를 사용하여 무한 스크롤을 구현

```js
  const callback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        !isLoading && getIssueList();
      }
    },
    [index, isLoading],
  );

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(callback);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [callback]);
```

무한 스크롤을 구현하기 위해 `IntersectionObserver`를 이용해 메인 스레드 부하를 감소 시켜주었습니다.
리스트의 맨 아래에 로딩애니메이션을 만들어 유저 경험을 향상시켰습니다.

### 마크다운 스타일링

이슈 상세 페이지에서 데이터가 마크다운으로 오기 때문에 마크다운을 스타일링 하기 위해 react-markdown을 사용해 스타일링 해줬습니다. MarkdownRenderer라는 공통 컴포넌트를 만들어 마크다운을 스타일링 하게 만들어 주었습니다. 처음으로 마크다운을 스타일링 해보면서 마크다운의 구조에 대해 공부할 수 있었습니다.
