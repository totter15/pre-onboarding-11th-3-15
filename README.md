# 프로젝트 소개

[원티드 프리온보딩 인틴십] 3주차 과제입니다.

GitHub REST API를 이용해 facebook / react의 레퍼지토리에서 이슈리스트를 가져오고 무한 스크롤 기능으로 구현한 웹사이트입니다. 리스트의 5번째에는 광고를 넣어 관리해주었습니다.

**issue를 불러올떄 이용한 repository**

[facebook / react](https://github.com/facebook/react/issues)

**배포 링크**

https://pre-onboarding-11th-3-15.vercel.app/

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

## 기능 구현

### Router

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

### Redux Toolkit

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

### Infinite scroll

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

`IntersectionObserver`를 사용하여 무한 스크롤을 구현해 주었습니다.
