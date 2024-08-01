"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3396],{80605:function(n,e,r){r.d(e,{UA:function(){return f},Uw:function(){return l},c7:function(){return u},jJ:function(){return d},xG:function(){return a}});var t=r(40055),i=r(43240);let o=(0,i.BX)("\n  query GetServerInfo {\n    serverInfo {\n      isAdminInitialized\n      isEmailConfigured\n      isChatEnabled\n      allowSelfSignup\n      isDemoMode\n    }\n  }\n"),s=()=>{let[{data:n}]=(0,t.aM)({query:o});return null==n?void 0:n.serverInfo},a=()=>{var n;return null===(n=s())||void 0===n?void 0:n.isChatEnabled},u=()=>{var n;return null===(n=s())||void 0===n?void 0:n.isAdminInitialized},l=()=>{var n;return null===(n=s())||void 0===n?void 0:n.isEmailConfigured},d=()=>{var n;return null===(n=s())||void 0===n?void 0:n.allowSelfSignup},f=()=>{var n;return null===(n=s())||void 0===n?void 0:n.isDemoMode}},91302:function(n,e,r){r.d(e,{Dp:function(){return p},Ho:function(){return y},QJ:function(){return S},av:function(){return T},kP:function(){return I},zq:function(){return m}});var t,i,o=r(36164),s=r(3546),a=r(11978),u=r(24426),l=r.n(u),d=r(43240),f=r(80605),c=r(11634),v=r(66794);function g(n,e){var r,t;let o=function(n,e){switch(e.type){case i.SignIn:case i.Refresh:return{status:"authenticated",data:e.data};case i.SignOut:return{status:"unauthenticated",data:void 0}}}(0,e);return n.status==o.status&&(r=n.data,t=o.data,(null==r?void 0:r.accessToken)===(null==t?void 0:t.accessToken)&&(null==r?void 0:r.refreshToken)===(null==t?void 0:t.refreshToken))?n:o}(t=i||(i={}))[t.SignIn=0]="SignIn",t[t.SignOut=1]="SignOut",t[t.Refresh=2]="Refresh";let h=s.createContext({}),p=(0,d.BX)("\n  mutation refreshToken($refreshToken: String!) {\n    refreshToken(refreshToken: $refreshToken) {\n      accessToken\n      refreshToken\n    }\n  }\n"),$=(0,d.BX)("\n  mutation LogoutAllSessions {\n    logoutAllSessions\n  }\n"),y=n=>{let{children:e}=n,[r,t]=s.useState(!1),[a]=l()(v.nd,void 0),[u,d]=s.useReducer(g,{status:"loading",data:void 0});s.useEffect(()=>{(null==a?void 0:a.accessToken)&&(null==a?void 0:a.refreshToken)?d({type:i.SignIn,data:a}):d({type:i.SignOut}),t(!0)},[]),s.useEffect(()=>{!r||((null==a?void 0:a.accessToken)&&(null==a?void 0:a.refreshToken)?d({type:i.Refresh,data:a}):(null==a?void 0:a.accessToken)||(null==a?void 0:a.refreshToken)||d({type:i.SignOut}))},[a]);let f=s.useMemo(()=>{var n;return(null==u?void 0:u.status)=="authenticated"?{data:{accessToken:u.data.accessToken},status:u.status}:{status:null!==(n=null==u?void 0:u.status)&&void 0!==n?n:"loading",data:null}},[u]);return(0,o.jsx)(h.Provider,{value:{authState:u,dispatch:d,session:f},children:e})};class k extends Error{constructor(){super("AuthProvider is missing. Please add the AuthProvider at root level")}}function b(){let n=s.useContext(h);if(!n)throw new k;return n}function m(){let{dispatch:n}=b(),[e,r]=l()(v.nd,void 0);return async e=>(r({accessToken:e.accessToken,refreshToken:e.refreshToken}),n({type:i.SignIn,data:e}),!0)}function S(){let n=(0,c.D)($),{dispatch:e}=b(),[r,t]=l()(v.nd,void 0);return async()=>{await n(),t(void 0),e({type:i.SignOut})}}function I(){let{session:n}=b();return n}let w=["/auth/signin","/auth/signup","/auth/reset-password"];function T(){let n=(0,f.c7)(),e=(0,a.useRouter)(),r=(0,a.usePathname)(),t=(0,a.useSearchParams)(),{data:i,status:o}=I();return s.useEffect(()=>{if("loading"===o||"authenticated"===o||void 0===n)return;let i="/auth/signup"===r&&"true"===t.get("isAdmin");if(!i&&!n)return e.replace("/auth/signup?isAdmin=true");w.includes(r)||e.replace("/auth/signin")},[n,o]),i}},11634:function(n,e,r){r.d(e,{D:function(){return v},L:function(){return g}});var t=r(22365),i=r(28552),o=r(81013),s=r(79716),a=r(74630),u=r(40055),l=r(44745),d=r(91302),f=r(70410),c=r(66794);function v(n,e){var r;let[t,i]=(0,u.Db)(n),o=(null==e?void 0:e.form)?(r=e.form,n=>{let{graphQLErrors:e=[]}=n;for(let n of e)if(n.extensions&&n.extensions["validation-errors"]){let e=n.extensions["validation-errors"];for(let n of e.errors)r.setError(n.path,n)}else(null==n?void 0:n.originalError)&&r.setError("root",n.originalError)}):void 0,s=async n=>{let r;try{if(null==(r=await i(n))?void 0:r.error)o&&o(r.error),(null==e?void 0:e.onError)&&e.onError(r.error);else if(!(0,a.Z)(null==r?void 0:r.data)){var t;null==e||null===(t=e.onCompleted)||void 0===t||t.call(e,r.data)}}catch(n){(null==e?void 0:e.onError)&&e.onError(n);return}return r};return s}let g=new l.KU({url:"/graphql",requestPolicy:"cache-and-network",exchanges:[(0,i.HG)({keys:{CompletionStats:()=>null,ServerInfo:()=>null,RepositorySearch:()=>null,RepositoryList:()=>null,RepositoryGrep:()=>null,GrepLine:()=>null,GrepFile:()=>null,GrepTextOrBase64:()=>null,GrepSubMatch:()=>null,Repository:n=>n?"".concat(n.kind,"_").concat(n.id):null,GitReference:()=>null},resolvers:{Query:{invitations:(0,o.N)(),gitRepositories:(0,o.N)(),webCrawlerUrls:(0,o.N)(),integrations:(0,o.N)()}},updates:{Mutation:{deleteInvitation(n,e,r,t){n.deleteInvitation&&r.inspectFields("Query").filter(n=>"invitations"===n.fieldName).forEach(n=>{r.updateQuery({query:f.lE,variables:n.arguments},n=>{var r;return(null==n?void 0:null===(r=n.invitations)||void 0===r?void 0:r.edges)&&(n.invitations.edges=n.invitations.edges.filter(n=>n.node.id!==e.id)),n})})},deleteGitRepository(n,e,r,t){n.deleteGitRepository&&r.inspectFields("Query").filter(n=>"gitRepositories"===n.fieldName).forEach(n=>{r.updateQuery({query:f.S1,variables:n.arguments},n=>{var r;return(null==n?void 0:null===(r=n.gitRepositories)||void 0===r?void 0:r.edges)&&(n.gitRepositories.edges=n.gitRepositories.edges.filter(n=>n.node.id!==e.id)),n})})},deleteWebCrawlerUrl(n,e,r,t){n.deleteWebCrawlerUrl&&r.inspectFields("Query").filter(n=>"webCrawlerUrls"===n.fieldName).forEach(n=>{r.updateQuery({query:f.XP,variables:n.arguments},n=>{var r;return(null==n?void 0:null===(r=n.webCrawlerUrls)||void 0===r?void 0:r.edges)&&(n.webCrawlerUrls.edges=n.webCrawlerUrls.edges.filter(n=>n.node.id!==e.id)),n})})},deleteIntegration(n,e,r,t){n.deleteIntegration&&r.inspectFields("Query").filter(n=>"integrations"===n.fieldName).forEach(n=>{r.updateQuery({query:f.kb,variables:n.arguments},n=>((null==n?void 0:n.integrations)&&(n.integrations.edges=n.integrations.edges.filter(n=>n.node.id!==e.id)),n))})},createIntegration(n,e,r){let t="Query";r.inspectFields(t).filter(n=>{var r,t,i;return"integrations"===n.fieldName&&!!(null===(r=n.arguments)||void 0===r?void 0:r.kind)&&(null===(t=n.arguments)||void 0===t?void 0:t.kind)===(null==e?void 0:null===(i=e.input)||void 0===i?void 0:i.kind)}).forEach(n=>{r.invalidate(t,n.fieldName,n.arguments)})}}}}),(0,t.M)(async n=>{let e=(0,c.bW)(),r=null==e?void 0:e.accessToken,t=null==e?void 0:e.refreshToken;return{addAuthToOperation(e){let i=(0,c.bW)();return(r=null==i?void 0:i.accessToken,t=null==i?void 0:i.refreshToken,r)?n.appendHeaders(e,{Authorization:"Bearer ".concat(r)}):e},didAuthError(n,e){let r=n.graphQLErrors.some(n=>{var e;return(null==n?void 0:null===(e=n.extensions)||void 0===e?void 0:e.code)==="UNAUTHORIZED"});return r&&c.gN.clearAccessToken(),r},willAuthError(n){let e=(0,c.bW)();if(r=null==e?void 0:e.accessToken,t=null==e?void 0:e.refreshToken,"query"===n.kind&&n.query.definitions.some(n=>{var e;return"OperationDefinition"===n.kind&&(null===(e=n.name)||void 0===e?void 0:e.value)&&["GetServerInfo"].includes(n.name.value)})||"mutation"===n.kind&&n.query.definitions.some(n=>{var e;return"OperationDefinition"===n.kind&&(null===(e=n.name)||void 0===e?void 0:e.value)&&["tokenAuth","register"].includes(n.name.value)})||t&&"mutation"===n.kind&&n.query.definitions.some(n=>{var e;return"OperationDefinition"===n.kind&&(null==n?void 0:null===(e=n.name)||void 0===e?void 0:e.value)==="refreshToken"}))return!1;if(!r)return c.gN.clearAccessToken(),!0;try{let{exp:n}=(0,s.o)(r);return(0,c.pw)(n)}catch(n){return!0}},refreshAuth:async()=>c.gN.refreshToken(async()=>{var e;let r=null===(e=(0,c.bW)())||void 0===e?void 0:e.refreshToken;if(r)return n.mutate(d.Dp,{refreshToken:r}).then(n=>{var e;return null==n?void 0:null===(e=n.data)||void 0===e?void 0:e.refreshToken})})}}),(0,l.Dk)({onError(n){n.message.startsWith("[GraphQL]")&&(n.message=n.message.replace("[GraphQL]","").trim())}}),l.Ek]})},70410:function(n,e,r){r.d(e,{Cl:function(){return f},D7:function(){return p},DQ:function(){return u},GG:function(){return s},S1:function(){return o},XP:function(){return g},Y6:function(){return d},kb:function(){return c},lE:function(){return i},ts:function(){return v},yB:function(){return a},yw:function(){return l},zz:function(){return h}});var t=r(43240);let i=(0,t.BX)("\n  query ListInvitations(\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    invitations(after: $after, before: $before, first: $first, last: $last) {\n      edges {\n        node {\n          id\n          email\n          code\n          createdAt\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),o=(0,t.BX)("\n  query gitRepositories(\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    gitRepositories(\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          name\n          gitUrl\n          jobInfo {\n            lastJobRun {\n              id\n              job\n              createdAt\n              finishedAt\n              exitCode\n            }\n            command\n          }\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),s=(0,t.BX)("\n  query ListJobRuns(\n    $ids: [ID!]\n    $jobs: [String!]\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    jobRuns(\n      ids: $ids\n      jobs: $jobs\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          job\n          createdAt\n          startedAt\n          finishedAt\n          exitCode\n          stdout\n          stderr\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),a=(0,t.BX)("\n  query GetJobRunStats($jobs: [String!]) {\n    jobRunStats(jobs: $jobs) {\n      success\n      failed\n      pending\n    }\n  }\n"),u=(0,t.BX)("\n  query ListJobs {\n    jobs\n  }\n"),l=(0,t.BX)("\n  query ListUsers($after: String, $before: String, $first: Int, $last: Int) {\n    users(after: $after, before: $before, first: $first, last: $last) {\n      edges {\n        node {\n          id\n          email\n          isAdmin\n          isOwner\n          createdAt\n          active\n          name\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),d=(0,t.BX)("\n  query DailyStatsInPastYear($users: [ID!]) {\n    dailyStatsInPastYear(users: $users) {\n      start\n      end\n      completions\n      selects\n      views\n    }\n  }\n"),f=(0,t.BX)("\n  query DailyStats(\n    $start: DateTime!\n    $end: DateTime!\n    $users: [ID!]\n    $languages: [Language!]\n  ) {\n    dailyStats(start: $start, end: $end, users: $users, languages: $languages) {\n      start\n      end\n      completions\n      selects\n      views\n      language\n    }\n  }\n"),c=(0,t.BX)("\n  query ListIntegrations(\n    $ids: [ID!]\n    $kind: IntegrationKind\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    integrations(\n      ids: $ids\n      kind: $kind\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          displayName\n          status\n          apiBase\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),v=(0,t.BX)("\n  query ListIntegratedRepositories(\n    $ids: [ID!]\n    $kind: IntegrationKind\n    $active: Boolean\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    integratedRepositories(\n      ids: $ids\n      kind: $kind\n      active: $active\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          displayName\n          gitUrl\n          active\n          jobInfo {\n            lastJobRun {\n              id\n              job\n              createdAt\n              finishedAt\n              startedAt\n              exitCode\n            }\n            command\n          }\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),g=(0,t.BX)("\n  query WebCrawlerUrls(\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    webCrawlerUrls(after: $after, before: $before, first: $first, last: $last) {\n      edges {\n        node {\n          url\n          id\n          createdAt\n          jobInfo {\n            lastJobRun {\n              id\n              job\n              createdAt\n              finishedAt\n              exitCode\n            }\n            command\n          }\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),h=(0,t.BX)("\n  query RepositoryList {\n    repositoryList {\n      id\n      name\n      kind\n      gitUrl\n      refs {\n        name\n        commit\n      }\n    }\n  }\n"),p=(0,t.BX)("\n  query RepositorySearch(\n    $kind: RepositoryKind!\n    $id: ID!\n    $rev: String\n    $pattern: String!\n  ) {\n    repositorySearch(kind: $kind, id: $id, rev: $rev, pattern: $pattern) {\n      type\n      path\n      indices\n    }\n  }\n")},66794:function(n,e,r){r.d(e,{bW:function(){return a},gN:function(){return c},nd:function(){return s},pw:function(){return d}});var t=r(79716),i=r(74630),o=r(74248);let s="_tabby_auth",a=()=>{if((0,o.S_)()){let n=localStorage.getItem(s);if(n)try{return JSON.parse(n)}catch(n){}}},u=n=>{localStorage.setItem(s,JSON.stringify(n))},l=()=>{localStorage.removeItem(s),window.dispatchEvent(new StorageEvent("storage",{storageArea:window.localStorage,url:window.location.href,key:s}))},d=n=>!!(0,i.Z)(n)||Date.now()>1e3*n,f=n=>!(0,i.Z)(n)&&Date.now()-1e3*n<6e4,c=new class{clearAccessToken(){let n=a();n&&u({...n,accessToken:""})}async refreshToken(n){try{var e;if(void 0===(null===(e=navigator)||void 0===e?void 0:e.locks))throw console.error("The Web Locks API is not supported in your browser. Please upgrade to a newer browser version."),Error();await navigator.locks.request("_tabby_auth_lock",async()=>{let e;let r=a(),i=null==r?void 0:r.accessToken,o=null==r?void 0:r.refreshToken;if(i){let{iat:o}=(0,t.o)(i);e=f(o)?r:await n()}else o&&(e=await n());e?u(e):l()})}catch(n){l()}}}}}]);