"use strict";(self.webpackChunklife_checkpoint_github_io=self.webpackChunklife_checkpoint_github_io||[]).push([[8130],{7735:n=>{n.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"welcome","metadata":{"permalink":"/blog/welcome","editUrl":"https://github.com/LifeCheckpoint/LifeCheckpoint.github.io.git/blog/2024-12-19-welcome/index.md","source":"@site/blog/2024-12-19-welcome/index.md","title":"Welcome","description":"\u6b22\u8fce\u901b\u901b...","date":"2024-12-19T00:00:00.000Z","tags":[{"inline":false,"label":"intro","permalink":"/blog/tags/intro","description":"\u4e00\u4e9b\u7b80\u8981\u4ecb\u7ecd"}],"readingTime":0.19,"hasTruncateMarker":true,"authors":[{"name":"Life_Checkpoint","title":"SUSTech","url":"https://github.com/LifeCheckpoint","socials":{"github":"https://github.com/LifeCheckpoint"},"imageURL":"https://avatars.githubusercontent.com/u/59783101?v=4","key":"Life_Checkpoint","page":null}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["Life_Checkpoint"],"tags":["intro"]},"unlisted":false,"nextItem":{"title":"\u63a8\u7bb1\u5b50\u8def\u5f84\u957f\u4f30\u8ba1\u95ee\u9898\u968f\u60f3","permalink":"/blog/2024/12/07/IDAStar-New-Algo-Thinking"}},"content":"### \u6b22\u8fce\u901b\u901b...\\n\\n\x3c!--truncate--\x3e\\n\\n## My Github...\\n\\n![Life_Checkpoint Details](http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=lifecheckpoint&theme=date_night)\\n![Top Languages by Repo](http://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=lifecheckpoint&theme=date_night)\\n![Top Languages by Commits](http://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=lifecheckpoint&theme=date_night)\\n![Stats](http://github-profile-summary-cards.vercel.app/api/cards/stats?username=lifecheckpoint&theme=date_night)\\n![Commits (UTC+8)](http://github-profile-summary-cards.vercel.app/api/cards/productive-time?username=lifecheckpoint&theme=date_night&utcOffset=8)\\n\\n## Deploy This Project\\n\\n```shell\\ncmd /C \'set \\"GIT_USER=<GITHUB_USER>\\" && set \\"CURRENT_BRANCH=main\\" && yarn deploy\'\\n```"},{"id":"/2024/12/07/IDAStar-New-Algo-Thinking","metadata":{"permalink":"/blog/2024/12/07/IDAStar-New-Algo-Thinking","editUrl":"https://github.com/LifeCheckpoint/LifeCheckpoint.github.io.git/blog/2024-12-07-IDAStar-New-Algo-Thinking/index.md","source":"@site/blog/2024-12-07-IDAStar-New-Algo-Thinking/index.md","title":"\u63a8\u7bb1\u5b50\u8def\u5f84\u957f\u4f30\u8ba1\u95ee\u9898\u968f\u60f3","description":"\u8fd9\u4e2a\u7b97\u6cd5\u662f\u6211\u81ea\u5df1\u60f3\u51fa\u6765\u7684\u4e00\u4e2a\u968f\u673a\u7b97\u6cd5\uff0c\u80fd\u591f\u5e73\u8861\u6548\u7387\u4e0e\u65f6\u95f4","date":"2024-12-07T00:00:00.000Z","tags":[{"inline":false,"label":"algo","permalink":"/blog/tags/algo","description":"\u4e00\u4e9b\u7b97\u6cd5\u7684\u60f3\u6cd5"}],"readingTime":2.545,"hasTruncateMarker":true,"authors":[{"name":"Life_Checkpoint","title":"SUSTech","url":"https://github.com/LifeCheckpoint","socials":{"github":"https://github.com/LifeCheckpoint"},"imageURL":"https://avatars.githubusercontent.com/u/59783101?v=4","key":"Life_Checkpoint","page":null}],"frontMatter":{"title":"\u63a8\u7bb1\u5b50\u8def\u5f84\u957f\u4f30\u8ba1\u95ee\u9898\u968f\u60f3","authors":["Life_Checkpoint"],"tags":["algo"]},"unlisted":false,"prevItem":{"title":"Welcome","permalink":"/blog/welcome"},"nextItem":{"title":"\u63a8\u7bb1\u5b50\u6b7b\u9501\u68c0\u6d4b\u95ee\u9898\u968f\u60f3","permalink":"/blog/2024/12/04/Sokoban-Corner-Deadlock-Test"}},"content":"*\u8fd9\u4e2a\u7b97\u6cd5\u662f\u6211\u81ea\u5df1\u60f3\u51fa\u6765\u7684\u4e00\u4e2a\u968f\u673a\u7b97\u6cd5\uff0c\u80fd\u591f\u5e73\u8861\u6548\u7387\u4e0e\u65f6\u95f4*\\r\\n\\r\\n\x3c!--truncate--\x3e\\r\\n\\r\\n**\u968f\u673a\u8def\u5f84\u957f\u4f30\u8ba1**\u9002\u7528\u4e8e IDA* \u7b49\u7b97\u6cd5\u7684\u542f\u53d1\u5f0f\u51fd\u6570\\r\\n\\r\\n### \u7b97\u6cd5\u76ee\u7684\\r\\n\\r\\n\u5728\u641c\u7d22\u7b97\u6cd5\u4e2d\uff0c\u542f\u53d1\u5f0f\u51fd\u6570\u5e38\u5e38\u88ab\u8bbe\u5b9a\u4e3a `Box` \u5230 `BoxTarget` \u7684\u66fc\u54c8\u987f\u8ddd\u79bb\uff0c\u7136\u800c\u8fd9\u79cd\u542f\u53d1\u5f0f\u51fd\u6570\u5e76\u4e0d\u7b97\u7cbe\u51c6\\r\\n\\r\\n\u4f20\u7edf\u7684\u8def\u5f84\u957f\u4f30\u8ba1\u4e5f\u4e0d\u53ef\u884c\u3002\u4f8b\u5982\uff0c\u5728\u6bcf\u4e00\u6b21\u8ba1\u7b97 `loss` \u65f6\uff0c\u90fd\u4f7f\u7528 `A*` \u7b97\u6cd5\u8fdb\u884c\u8def\u5f84\u957f\u4f30\u8ba1\uff0c\u5c31\u4f1a\u9020\u6210\u672c\u672b\u5012\u7f6e\uff1a\\r\\n\\r\\n1. \u4f5c\u4e3a\u79bb\u6563\u95ee\u9898\uff0c\u6700\u4f18\u89e3\u5f80\u5f80\u4e0d\u4e00\u5b9a\u8ba9\u7bb1\u5b50\u76f4\u63a5\u63a8\u5165\u76ee\u6807\u70b9\uff0c\u8fd9\u53ea\u662f\u5c40\u90e8\u6700\u4f18\u800c\u975e\u5168\u5c40\u6700\u4f18\\r\\n2. `A*` \u628a\u4e00\u4e2a $O(1)$ \u7684\u7b97\u6cd5\u53d8\u6210 $O(k^n)$\uff0c\u9020\u6210\u7b97\u6cd5\u7684\u74f6\u9888\uff0c\u8fd9\u662f\u4e0d\u53ef\u63a5\u53d7\u7684\\r\\n\\r\\n\u56e0\u6b64\uff0c\u8fd9\u91cc\u63d0\u51fa**\u968f\u673a\u8def\u5f84\u4f30\u8ba1**\u7684\u7b97\u6cd5\u8fdb\u884c\u8def\u5f84\u7684\u4f30\u8ba1\\r\\n\\r\\n### \u7b97\u6cd5\u5185\u5bb9\\r\\n\\r\\n\u7b97\u6cd5\u9700\u8981\u4e00\u6bb5\u65f6\u95f4\u7684\u9884\u5904\u7406\uff0c\u8fd9\u4e2a\u9884\u5904\u7406\u9700\u8981\u7528 `A*`\\r\\n\\r\\n#### \u9884\u5904\u7406\\r\\n\\r\\n1. \u4ece\u5730\u56fe\u4e2d\u968f\u673a\u91c7\u6837\u4e00\u5bf9\u70b9\uff0c\u8fd9\u4e00\u5bf9\u70b9\u7684\u66fc\u54c8\u987f\u8ddd\u79bb\u4e0d\u592a\u8fd1\uff0c\u4e5f\u4e0d\u592a\u8fdc\\r\\n2. \u5982\u679c\u91c7\u6837\u70b9\u6709\u5899\u58c1\uff0c\u5f03\u53bb\uff0c\u91cd\u91c7\\r\\n3. \u5229\u7528 `A*` \u6216 `BFS`\uff08\u5982\u679c\u8ddd\u79bb\u4e0d\u7b97\u8fdc\uff09\u8ba1\u7b97\u8fd9\u4e00\u5bf9\u70b9\u7684\u771f\u5b9e\u8ddd\u79bb\\r\\n4. \u91cd\u590d\u4ee5\u4e0a\u8fc7\u7a0b $k$ \u6b21\\r\\n\\r\\n#### \u6b63\u5f0f\u8ba1\u7b97\\r\\n\\r\\n\u5047\u5b9a\u5bf9\u4e8e\u4e24\u4e2a\u70b9 `A` `B`\uff0c\u4f7f\u7528\u4ee5\u4e0b\u7b97\u6cd5\u4f30\u8ba1 `A` \u548c `B` \u4e4b\u95f4\u7684\u8ddd\u79bb\uff1a\\r\\n\\r\\n1. \u5206\u522b\u627e\u5230\u79bb `A` `B` \u4e24\u70b9\u6700\u8fd1\u7684\u91c7\u6837\u70b9 `A\'` `B\'`\\r\\n2. \u8ba1\u7b97\u66fc\u54c8\u987f\u8ddd\u79bb $d(A,A\')+d(B,B\')$\uff0c\u7136\u540e\u52a0\u4e0a\u9884\u5148\u8ba1\u7b97\u597d\u7684\u91c7\u6837\u70b9\u8ddd\u79bb $d(A\',B\')$\\r\\n3. \u7ed3\u679c\u5c31\u662f `A` `B` \u4e24\u70b9\u7684\u8fd1\u4f3c\u8ddd\u79bb\\r\\n4. \u5982\u679c\u9700\u8981\u5e73\u6ed1\uff0c\u53ef\u4ee5\u548c `A` `B` \u4e24\u70b9\u4e4b\u95f4\u7684\u66fc\u54c8\u987f\u8ddd\u79bb\u505a\u52a0\u6743\u5e73\u5747\\r\\n\\r\\n#### \u4e3a\u4ec0\u4e48\u80fd\u51d1\u6548\uff1f\\r\\n\\r\\n\u8fd9\u4e2a\u7b97\u6cd5\u57fa\u4e8e\u4e00\u4e2a\u91cd\u8981\u7684\u5047\u8bbe\uff1a**\u4e00\u5bf9\u6bd4\u8f83\u8fd1\u7684\u70b9\uff0c\u5176\u66fc\u54c8\u987f\u8ddd\u79bb\u5bf9\u771f\u5b9e\u8ddd\u79bb\u7684\u8fd1\u4f3c\u7a0b\u5ea6\uff0c\u603b\u662f\u9ad8\u4e8e\u4e00\u5bf9\u6bd4\u8f83\u8fdc\u7684\u70b9\uff0c\u5176\u66fc\u54c8\u987f\u8ddd\u79bb\u5bf9\u771f\u5b9e\u8ddd\u79bb\u7684\u8fd1\u4f3c\u7a0b\u5ea6**"},{"id":"/2024/12/04/Sokoban-Corner-Deadlock-Test","metadata":{"permalink":"/blog/2024/12/04/Sokoban-Corner-Deadlock-Test","editUrl":"https://github.com/LifeCheckpoint/LifeCheckpoint.github.io.git/blog/2024-12-04-Sokoban-Corner-Deadlock-Test/index.md","source":"@site/blog/2024-12-04-Sokoban-Corner-Deadlock-Test/index.md","title":"\u63a8\u7bb1\u5b50\u6b7b\u9501\u68c0\u6d4b\u95ee\u9898\u968f\u60f3","description":"\u63a8\u7bb1\u5b50\u7684\u6b7b\u9501\u68c0\u6d4b\u662f\u4e00\u4e2a\u590d\u6742\u7684\u95ee\u9898\uff0c\u6709\u4e13\u95e8\u7684\u7814\u7a76\u5bf9\u8be5\u95ee\u9898\u8fdb\u884c\u4f18\u5316\u3002","date":"2024-12-04T00:00:00.000Z","tags":[{"inline":false,"label":"algo","permalink":"/blog/tags/algo","description":"\u4e00\u4e9b\u7b97\u6cd5\u7684\u60f3\u6cd5"}],"readingTime":7.015,"hasTruncateMarker":true,"authors":[{"name":"Life_Checkpoint","title":"SUSTech","url":"https://github.com/LifeCheckpoint","socials":{"github":"https://github.com/LifeCheckpoint"},"imageURL":"https://avatars.githubusercontent.com/u/59783101?v=4","key":"Life_Checkpoint","page":null}],"frontMatter":{"title":"\u63a8\u7bb1\u5b50\u6b7b\u9501\u68c0\u6d4b\u95ee\u9898\u968f\u60f3","authors":["Life_Checkpoint"],"tags":["algo"]},"unlisted":false,"prevItem":{"title":"\u63a8\u7bb1\u5b50\u8def\u5f84\u957f\u4f30\u8ba1\u95ee\u9898\u968f\u60f3","permalink":"/blog/2024/12/07/IDAStar-New-Algo-Thinking"},"nextItem":{"title":"\u63a8\u7bb1\u5b50\u5272\u70b9\u68c0\u6d4b\u95ee\u9898\u968f\u60f3","permalink":"/blog/2024/12/04/Sokoban-CutVertex-Test"}},"content":"\u63a8\u7bb1\u5b50\u7684\u6b7b\u9501\u68c0\u6d4b\u662f\u4e00\u4e2a\u590d\u6742\u7684\u95ee\u9898\uff0c\u6709\u4e13\u95e8\u7684\u7814\u7a76\u5bf9\u8be5\u95ee\u9898\u8fdb\u884c\u4f18\u5316\u3002\\r\\n\\r\\n\x3c!--truncate--\x3e\\r\\n\\r\\n[\u73b0\u4ee3\u63a8\u7bb1\u5b50\u6559\u7a0b - \u6b7b\u9501 DeadLock](https://shenmian.github.io/sokoban-tutorial/solver/deadlocks.html) \u7ed9\u51fa\u4e86\u6b7b\u9501\u7684\u4e00\u822c\u5b9a\u4e49\\r\\n\\r\\n`Tristan Cazenave` \u4e0e `Nicolas Jouandeau` \u7684 [Towards deadlock free Sokoban](https://www.lamsade.dauphine.fr/~cazenave/papers/sokoban.pdf) \u7ed9\u51fa\u4e86\u68c0\u6d4b\u6b7b\u9501\u7684\u9ad8\u6548\u6811\u7b97\u6cd5\uff08\u7136\u800c\u5b9e\u73b0\u7b97\u6cd5\u5f88\u56f0\u96be\uff09\\r\\n\\r\\n\u6b7b\u9501\u7684\u7c7b\u578b\u975e\u5e38\u591a\uff0c\u589e\u52a0\u4e86\u6b7b\u9501\u7684\u590d\u6742\u6027\\r\\n\\r\\n## \u6b7b\u9501\u68c0\u6d4b\u7684\u76ee\u7684\uff1f\\r\\n\\r\\n\u6b7b\u9501\u68c0\u6d4b\u53ef\u4ee5\u7528\u4e8e**\u65e9\u505c**\uff0c\u4f8b\u5982\\r\\n\\r\\n1. \u73a9\u5bb6\u7684\u5931\u8d25\u63d0\u793a\\r\\n2. Sokoban AI \u641c\u7d22\u7b97\u6cd5\u8fed\u4ee3\u7684\u526a\u679d\uff0c\u51cf\u5c0f\u641c\u7d22\u7a7a\u95f4\u4e0e\u5206\u652f\u5e38\u6570\\r\\n\\r\\n\u4f46\u662f\u6b7b\u9501**\u4e0d\u4e00\u5b9a\u4ee3\u8868\u5931\u8d25**\uff0c\u5728\u67d0\u4e9b\u521b\u65b0\u73a9\u6cd5\u4e2d\uff0c\u67d0\u4e9b\u6b7b\u9501\u53cd\u800c\u53ef\u80fd\u662f\u80dc\u5229\u7684\u5fc5\u8981\u6761\u4ef6\\r\\n\\r\\n---\\r\\n\\r\\n\u7531\u4e8e\u65f6\u95f4\u539f\u56e0\uff0c\u8fd9\u91cc\u4ec5\u91c7\u53d6\u4e00\u4e9b\u5e38\u89c1\u60c5\u51b5\u7684\u68c0\u6d4b\uff0c\u80fd\u591f\u505a\u5230\u521d\u6b65\u7684\u6b7b\u9501\u68c0\u67e5\\r\\n\\r\\n*\u672c\u8d28\u4e0a\u662f\u5339\u914d\u4eba\u5de5\u5efa\u7acb\u7684\u6a21\u5f0f\u6570\u636e\u5e93*\\r\\n\\r\\n## \u521d\u6b65\u6b7b\u9501\u68c0\u6d4b\\r\\n\\r\\n\u521d\u6b65\u7684\u6b7b\u9501\u6709\u4ee5\u4e0b\u51e0\u79cd\uff1a\\r\\n\\r\\n1. \u89d2\u843d\u6b7b\u9501\\r\\n2. \u80e1\u540c\u6b7b\u9501\\r\\n3. \u5355\u4fa7\u6b7b\u9501\\r\\n\\r\\n\u6bcf\u79cd\u6b7b\u9501\u90fd\u6709\u4e0d\u4e00\u6837\u7684\u9002\u7528\u6761\u4ef6\\r\\n\\r\\n### \u89d2\u843d\u6b7b\u9501\\r\\n\\r\\n**\u89d2\u843d\u6b7b\u9501**\u6307\u7684\u662f\u4e00\u4e2a\u7bb1\u5b50\u88ab\u63a8\u5230\u4e86\u4e24\u3001\u4e09\u6216\u56db\u9762\u5782\u76f4\u5899\u58c1\u7684\u5939\u89d2\u5904\uff0c\u4e14\u6240\u5728\u4f4d\u7f6e\u6ca1\u6709\u76ee\u6807\u70b9\\r\\n\\r\\n```\\r\\n######        ###    ###\\r\\n#   $#    #####$#    #$#\\r\\n#.   #    #     #    ###\\r\\n######    #######\\r\\n```\\r\\n\\r\\n\u8fd9\u662f\u4e00\u79cd\u7edd\u5bf9\u6b7b\u9501\uff0c\u5224\u65ad\u8f83\u4e3a\u7b80\u5355\uff0c\u76f4\u63a5\u5224\u5b9a\u7bb1\u5b50\u662f\u5426\u5b58\u5728\u4efb\u610f\u76f8\u90bb\u4e24\u4fa7\u5899\u58c1\u5373\u53ef\\r\\n\\r\\n### \u80e1\u540c\u6b7b\u9501\\r\\n\\r\\n**\u80e1\u540c\u6b7b\u9501**\u6307\u7684\u662f\u4e00\u4e2a\u7bb1\u5b50\u88ab\u63a8\u5230\u4e86\u6b7b\u80e1\u540c\u4e2d\uff0c\u80e1\u540c\u4e2d\u6ca1\u6709\u76ee\u6807\u70b9\uff0c\u5e76\u4e14\u7edd\u5bf9\u4e0d\u5b58\u5728\u8d70\u51fa\u80e1\u540c\u7684\u65b9\u6cd5\\r\\n\\r\\n\u6700\u7b80\u5355\u7684\u6b7b\u80e1\u540c\u5982\u4e0b\uff1a\\r\\n\\r\\n```\\r\\n   ###\\r\\n   # #\\r\\n   # #\\r\\n   # #\\r\\n####$####\\r\\n# @    .#\\r\\n#########\\r\\n```\\r\\n\\r\\n\u8fd9\u4e2a\u6b7b\u80e1\u540c\u7684\u7279\u70b9\u662f\uff1a\u73a9\u5bb6\u4e0e\u6b7b\u80e1\u540c\u7684\u53e6\u4e00\u90e8\u5206**\u4e0d\u8fde\u901a**\uff0c\u4ece\u73a9\u5bb6\u8fde\u901a\u5757\u5f00\u59cb\uff0c\u7bb1\u5b50\u53ea\u6709\u4e00\u4e2a\u65b9\u5411\u53ef\u4ee5\u884c\u8fdb\uff0c\u4e14\u8fd9\u4e2a\u65b9\u5411\u6700\u540e\u4f1a\u8fdb\u5165\u89d2\u843d\u6b7b\u9501\\r\\n\\r\\n\u6ce8\u610f\uff0c\u6709\u4e00\u4e9b\u80e1\u540c**\u5e76\u4e0d\u662f**\u6b7b\u80e1\u540c\uff0c\u4f8b\u5982\\r\\n\\r\\n```\\r\\n######\\r\\n#    #\\r\\n#    #\\r\\n#    #\\r\\n#### #\\r\\n   # #\\r\\n####$####\\r\\n# @   . #\\r\\n#########\\r\\n```\\r\\n\\r\\n\u4e3a\u4ec0\u4e48\u4e0d\u4f1a\u4ea7\u751f\u6b7b\u9501\u5462\uff1f\u56e0\u4e3a\u5728\u7bb1\u5b50\u79fb\u52a8\u5230\u89d2\u843d\u4ea7\u751f\u7edd\u5bf9\u6b7b\u9501\u4e4b\u524d\uff0c\u73a9\u5bb6\u4e0e\u80e1\u540c\u7684\u53e6\u4e00\u90e8\u5206\u53d1\u751f\u4e86**\u8fde\u901a**\uff0c\u7531\u6b64\u7834\u574f\u4e86\u80e1\u540c\u6b7b\u9501\u7684\u4ea7\u751f\u6761\u4ef6\\r\\n\\r\\n\u56e0\u6b64\u5728\u8fdb\u884c\u80e1\u540c\u6b7b\u9501\u7684\u68c0\u6d4b\u7684\u65f6\u5019\uff0c\u5e94\u8be5\u9075\u5faa\u4ee5\u4e0b\u65b9\u6cd5\\r\\n\\r\\n1. \u5982\u679c\u5224\u5b9a\u5230\u7bb1\u5b50\u88ab\u4e24\u4fa7\u5e73\u884c\u5899\u58c1\u5939\u4f4f\\r\\n2. \u5bf9\u7bb1\u5b50\u8fdb\u884c\u5f53\u524d\u73a9\u5bb6\u8fde\u901a\u65b9\u5411\u7684\u865a\u62df\u63a8\u52a8\\r\\n3. \u68c0\u6d4b\u662f\u5426\u4ea7\u751f...\\r\\n   1. \u89d2\u843d\u6b7b\u9501: \u5224\u5b9a\u4e3a\u7edd\u5bf9\u6b7b\u9501\\r\\n   2. \u73a9\u5bb6\u5757\u4e0e\u80e1\u540c\u5757\u53d1\u751f\u8fde\u901a: \u4e0d\u53ef\u5224\u5b9a\u4e3a\u6b7b\u9501\\r\\n   3. \u4ee5\u4e0a\u6761\u4ef6\u5747\u4e0d\u6ee1\u8db3\uff1a\u7ee7\u7eed\u8fdb\u884c\u865a\u62df\u63a8\u52a8\\r\\n\\r\\n*\u540e\u9762\u53d1\u73b0\u8fd9\u4e2a\u903b\u8f91\u6709\u4e00\u4e9b cases \u65e0\u6cd5\u901a\u8fc7\uff0c\u4f8b\u5982*\\r\\n\\r\\n```\\r\\n   #####\\r\\n####   #\\r\\n#  # # #\\r\\n#    $ #\\r\\n#.#### #\\r\\n######$##\\r\\n# @   . #\\r\\n#########\\r\\n```\\r\\n\\r\\n\u786e\u5b9e\u4e0d\u662f\u8fde\u901a\u5757\uff0c\u4f46\u80e1\u540c\u53e3\u7684\u7bb1\u5b50\u4e5f\u4e0d\u662f\u6b7b\u9501\u72b6\u6001\\r\\n\\r\\n\u89e3\u51b3\u65b9\u6cd5\u662f\uff0c\u5224\u65ad\u8fde\u901a\u5757\u65f6\uff0c\u5c06\u7bb1\u5b50\u89c6\u4e3a\u7a7a\u6c14\uff0c\u8fd9\u6837\u81f3\u591a\u4f1a\u6f0f\u5224\uff0c\u4f46\u7edd\u4e0d\u4f1a\u9519\u5224\\r\\n\\r\\n### \u5355\u4fa7\u6b7b\u9501\\r\\n\\r\\n**\u5355\u4fa7\u6b7b\u9501**\u6307\u7684\u662f\u4e00\u4e2a\u7bb1\u5b50\u88ab\u63a8\u5230\u4e86\u5355\u4fa7\u5899\u58c1\uff0c\u4f46\u662f\u5899\u58c1\u4e00\u4fa7\u6ca1\u6709\u4efb\u4f55\u76ee\u6807\u70b9\u4e14\u7bb1\u5b50**\u65e0\u6cd5\u9003\u51fa**\u5355\u4fa7\u5899\u58c1\\r\\n\\r\\n\u4f8b\u5982\\r\\n\\r\\n```\\r\\n#####\\r\\n#   #\\r\\n#  $#\\r\\n#.  #\\r\\n#####\\r\\n```\\r\\n\\r\\n\u540c\u6837\u9700\u8981\u6307\u51fa\u7684\u662f\uff0c\u7bb1\u5b50\u79fb\u52a8\u5230\u4e86\u5355\u4fa7\u5899\u58c1\u5e76\u4e0d\u4ee3\u8868\u7bb1\u5b50\u53d1\u751f\u4e86\u5355\u4fa7\u6b7b\u9501\uff0c\u56e0\u4e3a\u7bb1\u5b50\u662f\u6709\u673a\u4f1a\u9003\u51fa\u5355\u4fa7\u5899\u58c1\u7684\\r\\n\\r\\n```\\r\\n####\\r\\n#  #\\r\\n# $#\\r\\n#  #######\\r\\n#@      .#\\r\\n##########\\r\\n```\\r\\n\\r\\n\u7136\u800c\u6211\u4eec\u4e5f\u4e0d\u80fd\u7b80\u5355\u7684\u8ba4\u4e3a\u7bb1\u5b50\u80fd\u79fb\u52a8\u5230\u7a7a\u5730\u5c31\u662f\u6b7b\u9501\u4e0d\u6210\u7acb\uff0c\u6bd4\u5982\\r\\n\\r\\n```\\r\\n####\\r\\n#  ###\\r\\n#    #\\r\\n#  ###\\r\\n# $#\\r\\n#  #######\\r\\n#@      .#\\r\\n##########\\r\\n```\\r\\n\\r\\n\u5982\u679c\u5411\u4e0a\u79fb\u52a8\uff0c\u867d\u7136\u4f1a\u51fa\u73b0\u56db\u5468\u65e0\u5899\u58c1\u7684\u60c5\u51b5\uff0c\u4f46\u5982\u679c\u5185\u90e8\u662f\u4e00\u4e2a\u6b7b\u80e1\u540c\uff0c\u60c5\u51b5\u5c31\u4f1a\u8f6c\u5316\u4e3a**\u80e1\u540c\u6b7b\u9501**\\r\\n\\r\\n\u56e0\u6b64\uff0c\u53ef\u4ee5\u7528\u5982\u4e0b\u7b97\u6cd5\u68c0\u6d4b\u5355\u4fa7\u6b7b\u9501\uff1a\\r\\n\\r\\n1. \u5982\u679c\u7bb1\u5b50\u88ab\u79fb\u52a8\u5230\u5355\u4fa7\u5899\u58c1\\r\\n2. \u6cbf\u7bb1\u5b50\u4e24\u4fa7\u5bf9\u7bb1\u5b50\u5206\u522b\u8fdb\u884c\u865a\u62df\u79fb\u52a8\\r\\n3. \u5982\u679c\u7bb1\u5b50\u8fdb\u5165\u89d2\u843d\u6b7b\u9501\uff0c\u5224\u5b9a\u4e3a\u5355\u4fa7\u6b7b\u9501\\r\\n4. \u5982\u679c\u7bb1\u5b50\u8fdb\u5165\u56db\u5468\u7a7a\u5730\u7684\u683c\u5b50...\\r\\n   1. \u68c0\u67e5\u5f53\u524d\u73a9\u5bb6\u5757\u662f\u5426\u4e0e\u80fd\u591f\u5c06\u7bb1\u5b50\u5782\u76f4\u63a8\u79bb\u5899\u58c1\u7684\u5757\u8fde\u901a\uff0c\u5982\u679c\u8fde\u901a\uff0c\u5355\u4fa7\u6b7b\u9501\u4e0d\u6210\u7acb\\r\\n   2. \u5982\u679c\u4e0d\u8fde\u901a...\\r\\n      1. \u5c06\u7bb1\u5b50\u6cbf\u5899\u58c1\u65b9\u5411\u7ee7\u7eed\u79fb\u52a8\uff0c\u91cd\u590d 2 3 4 \u6b65\\r\\n      2. \u5c06\u7bb1\u5b50\u5411\u80e1\u540c\u5185\u63a8\u5165\uff0c\u68c0\u6d4b\u80e1\u540c\u6b7b\u9501\\r\\n      3. \u5982\u679c\u4ee5\u4e0a\u4e24\u4e2a\u7ed3\u679c\u4e2d\u6709\u4efb\u610f\u4e00\u4e2a\u4f7f\u6b7b\u9501\u4e0d\u6210\u7acb\uff0c\u5219\u8ba4\u4e3a\u5355\u4fa7\u6b7b\u9501\u4e0d\u6210\u7acb\\r\\n\\r\\n## \u5176\u5b83\u8bf4\u660e\\r\\n\\r\\n\u4ee5\u4e0a\u6b7b\u9501\u7b97\u6cd5\u90fd\u901a\u8fc7\u9012\u5f52\u6216\u5faa\u73af\u5b9e\u73b0\uff0c\u9700\u8981\u6307\u51fa\u7684\u662f\uff0c\u8fd9\u4e9b\u7b97\u6cd5\u7f16\u5199\u7b80\u5355\uff0c\u4f46\u6548\u7387\u4e0d\u9ad8\uff0c\u6240\u4ee5\u51fa\u73b0\u4e86\u5982\u4e0b\u4f18\u5316\u7b97\u6cd5\uff1a\\r\\n\\r\\n1. **\u9759\u6001\u4f18\u5316**: \u5c06\u8fdb\u5165\u67d0\u4e9b\u7279\u5b9a\u6b7b\u9501\u72b6\u6001\u7684\u7bb1\u5b50\u89c6\u4e3a\u5899\uff0c\u61d2\u60f0\u66f4\u65b0\u4e00\u5b9a\u4f1a\u53d1\u751f\u6b7b\u9501\u7684\u4f4d\u7f6e\\r\\n2. **\u6811\u4f18\u5316**\uff1a\u5c06\u7bb1\u5b50\u9996\u6b21\u8fdb\u5165\u6b7b\u9501\u7684\u72b6\u6001\u4f5c\u4e3a\u6b7b\u9501\u6811\u7684\u6839\u8282\u70b9\uff0c\u901a\u8fc7\u62d3\u5c55\u6811\u8282\u70b9\u9ad8\u6548\u83b7\u53d6\u6b7b\u9501\u4f4d\u7f6e\\r\\n\\r\\n\u5f53\u7136\uff0c\u4e5f\u6709\u66b4\u529b\u51fa\u5947\u8ff9\u7684\u901a\u7528\u7b97\u6cd5\uff1a\\r\\n\\r\\n1. **BFS & DFS & Beam Search \u7b49\u4f20\u7edf\u641c\u7d22**\\r\\n2. **A\\\\* IDA\\\\* \u53cc\u5411\u641c\u7d22 \u7b49\u542f\u53d1\u5f0f\u641c\u7d22**\\r\\n\\r\\n\u5728\u4e0d\u5faa\u73af\u7684\u524d\u63d0\u4e0b\uff0c\u66b4\u529b\u5bfb\u627e\u6240\u6709\u53ef\u80fd\u7684\u7bb1\u5b50\u79fb\u52a8\u7a7a\u95f4\uff0c\u5982\u679c\u68c0\u6d4b\u5230\u7bb1\u5b50\u4e0d\u53ef\u80fd\u79fb\u52a8\u5230\u4efb\u4f55\u76ee\u6807\u70b9\uff0c\u5219\u8ba4\u4e3a\u6b7b\u9501\u6210\u7acb\\r\\n\\r\\n\u7f3a\u70b9\uff1a\\r\\n\\r\\n1. \u4f20\u7edf\u641c\u7d22\uff1a**\u5de8\u6162**\uff0c~~\u5730\u56fe\u5f88\u5927\uff0c\u60c5\u51b5\u590d\u6742\uff0c\u8dd1\u5b8c\u4e00\u4e2a\u7b97\u6cd5\u7684\u65f6\u95f4\u53ef\u80fd\u8981\u7528\u4ebf\u5e74\u6765\u8ba1~~\\r\\n2. \u542f\u53d1\u5f0f\u641c\u7d22\uff1a\u76f8\u5bf9\u5feb\uff0c\u4f46\u662f\u5bf9\u4e8e\u5927\u7684\u5730\u56fe\u4f9d\u7136\u9700\u8981\u4e00\u4e9b\u65f6\u95f4\uff0c\u5927\u5730\u56fe\u7684\u5b9e\u65f6\u5224\u65ad\u9700\u6382\u91cf\\r\\n\\r\\n\u4f18\u5316\u7b97\u6cd5\u4e00\u822c\u662f\u662f\u9488\u5bf9**\u4f20\u7edf\u73a9\u6cd5**\u5f00\u53d1\u7684\uff0c\u5982\u679c\u9700\u8981\u901a\u7528\u6027\uff0c\u53ef\u4ee5\u505a\u51fa\u9488\u5bf9\u6027\u4fee\u6539\\r\\n\\r\\n\u5982\u679c\u611f\u5174\u8da3\u53ef\u4ee5\u53c2\u9605\u66f4\u591a\u8d44\u6599"},{"id":"/2024/12/04/Sokoban-CutVertex-Test","metadata":{"permalink":"/blog/2024/12/04/Sokoban-CutVertex-Test","editUrl":"https://github.com/LifeCheckpoint/LifeCheckpoint.github.io.git/blog/2024-12-04-Sokoban-CutVertex-Test/index.md","source":"@site/blog/2024-12-04-Sokoban-CutVertex-Test/index.md","title":"\u63a8\u7bb1\u5b50\u5272\u70b9\u68c0\u6d4b\u95ee\u9898\u968f\u60f3","description":"\u5199\u4e00\u4e9b\u4fbf\u6377\u529f\u80fd\u6216\u641c\u7d22\u7b97\u6cd5\u7684\u65f6\u5019\uff0c\u6211\u4eec\u5e38\u5e38\u4f1a\u9047\u5230\u9700\u8981\u5224\u65ad\u73a9\u5bb6\u662f\u5426\u80fd\u4ece\u7bb1\u5b50\u67d0\u4e00\u4fa7\u5230\u8fbe\u53e6\u4e00\u4fa7\u7684\u95ee\u9898","date":"2024-12-04T00:00:00.000Z","tags":[{"inline":false,"label":"algo","permalink":"/blog/tags/algo","description":"\u4e00\u4e9b\u7b97\u6cd5\u7684\u60f3\u6cd5"}],"readingTime":2.805,"hasTruncateMarker":true,"authors":[{"name":"Life_Checkpoint","title":"SUSTech","url":"https://github.com/LifeCheckpoint","socials":{"github":"https://github.com/LifeCheckpoint"},"imageURL":"https://avatars.githubusercontent.com/u/59783101?v=4","key":"Life_Checkpoint","page":null}],"frontMatter":{"title":"\u63a8\u7bb1\u5b50\u5272\u70b9\u68c0\u6d4b\u95ee\u9898\u968f\u60f3","authors":["Life_Checkpoint"],"tags":["algo"]},"unlisted":false,"prevItem":{"title":"\u63a8\u7bb1\u5b50\u6b7b\u9501\u68c0\u6d4b\u95ee\u9898\u968f\u60f3","permalink":"/blog/2024/12/04/Sokoban-Corner-Deadlock-Test"}},"content":"\u5199\u4e00\u4e9b\u4fbf\u6377\u529f\u80fd\u6216\u641c\u7d22\u7b97\u6cd5\u7684\u65f6\u5019\uff0c\u6211\u4eec\u5e38\u5e38\u4f1a\u9047\u5230\u9700\u8981\u5224\u65ad**\u73a9\u5bb6\u662f\u5426\u80fd\u4ece\u7bb1\u5b50\u67d0\u4e00\u4fa7\u5230\u8fbe\u53e6\u4e00\u4fa7**\u7684\u95ee\u9898\\r\\n\\r\\n\x3c!--truncate--\x3e\\r\\n\\r\\n\u4f20\u7edf\u7684\u7b97\u6cd5\uff0c\u5224\u65ad\u73a9\u5bb6\u662f\u5426\u80fd\u4ece\u4e00\u4e2a\u70b9\u79fb\u52a8\u5230\u53e6\u4e00\u4e2a\u70b9\uff0c\u9700\u8981\u7eaf `BFS` \u6216 `DFS` \u8fd9\u6837\u201c\u5927\u6c34\u6f2b\u704c\u201d\u6216\u201c\u9010\u6b65\u641c\u7d22\u201d\u7684\u65b9\u6cd5\uff0c\u5bfb\u627e\u6700\u7ec8\u7ed3\u679c\\r\\n\\r\\n\u7136\u800c\u8fd9\u79cd\u7b97\u6cd5\u7684\u590d\u6742\u5ea6\u662f $O(n^2)$\uff0c\u9762\u5bf9\u8f83\u5927\u7684\u5730\u56fe\u53ef\u80fd\u4f1a\u82b1\u8d39\u8f83\u957f\u7684\u65f6\u95f4\u3002\u5177\u4f53\u89e3\u91ca\u5982\u4e0b\uff1a\\r\\n\\r\\n> \u201c\u5728\u4e00\u4e2a\u7bb1\u5b50\u63a8\u52a8\u8def\u5f84\u641c\u7d22\u8fc7\u7a0b\u4e2d\uff0c\u8981\u53cd\u590d\u5224\u65ad\u4eba\u662f\u5426\u80fd\u4ece\u7bb1\u5b50\u7684\u4e00\u4fa7\u81ea\u7531\u79fb\u52a8\uff08\u5373\u4e0d\u63a8\u52a8\u7bb1\u5b50\u60c5\u51b5\u4e0b\uff09\u5230\u7bb1\u5b50\u7684\u53e6\u4e00\u4fa7\\r\\n> \\r\\n> \u201c\u8fd9\u4e2a\u4e0d\u96be\u5224\u65ad\uff0c\u7528\u7b80\u5355\u7684\u5e7f\u5ea6\u548c\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u90fd\u80fd\u5728\u7ebf\u6027\u65f6\u95f4\u5185\u5f97\u5230\u7b54\u6848\\r\\n> \\r\\n> \u201c\u4f46\u662f\u7bb1\u5b50\u63a8\u52a8\u8fc7\u7a0b\u4e2d\uff0c\u7bb1\u5b50\u4f4d\u7f6e\u5728\u53d8\u5316\uff0c\u8981\u5728\u4e0d\u540c\u7684\u4f4d\u7f6e\u90fd\u4f5c\u51fa\u5224\u65ad\\r\\n> \\r\\n> \u201c\u5047\u8bbe\u6d89\u53ca\u5230\u7684\u683c\u5b50\u6709 $n$ \u4e2a\uff0c\u6bcf\u5224\u65ad\u4e00\u6b21\u8981 $O(n)$ \u65f6\u95f4\uff0c\u4f46\u7bb1\u5b50\u6700\u591a\u4e5f\u53ef\u80fd\u51fa\u73b0\u5728 $n$ \u4e2a\u4e0d\u540c\u7684\u683c\u5b50\uff0c\u8981\u505a $n$ \u6b21\u8fd9\u6837\u7684\u5224\u65ad\uff0c\u6240\u4ee5\u603b\u7684\u65f6\u95f4\u590d\u6742\u5ea6\u662f $O(n^2)$\\r\\n> \\r\\n> \u201c\u5f53\u5173\u5361\u6bd4\u8f83\u5927\u65f6\uff0c\u5982\u300a\u4e00\u7bad\u5341\u4e07\u300b\u662f $50\\\\times50$ \u7684\u5173\u5361\uff0c\u4e0d\u7b97\u5899\u4f53\uff0c\u683c\u5b50\u4e5f\u4e0a\u5343\uff0c\u5bfc\u81f4\u8ba1\u7b97\u65f6\u95f4\u6bd4\u8f83\u957f\\r\\n\\r\\n\u90a3\u4e48\uff0c**\u5272\u70b9\u7b97\u6cd5**\u901a\u8fc7\u5176 $O(V+E)$ \u7684\u4f18\u79c0\u65f6\u95f4\u590d\u6742\u5ea6\uff0c\u6210\u4e3a\u6211\u4eec\u8fdb\u884c\u5224\u65ad\u7684\u9996\u9009\\r\\n\\r\\n## \u5272\u70b9\u7b97\u6cd5\u5f15\u5165\\r\\n\\r\\n\u4e00\u4e2a\u63a8\u7bb1\u5b50\u5730\u56fe\u7684\u5272\u70b9\uff0c\u6307\u7684\u662f**\u80fd\u591f\u628a\u4e00\u4e2a\u8fde\u901a\u533a\u57df\u5207\u5272\u6210\u4e24\u4e2a\u6216\u591a\u4e2a\u533a\u57df\u7684\u4f4d\u7f6e**\\r\\n\\r\\n\u4f8b\u5982\\r\\n\\r\\n```\\r\\n#######\\r\\n# #   #\\r\\n# #  ##\\r\\n#     #\\r\\n#   # #\\r\\n#######\\r\\n```\\r\\n\\r\\n\u8fd9\u4e2a\u5730\u56fe\u7684\u5272\u70b9\u6709\\r\\n\\r\\n```\\r\\n#######\\r\\n# # o #\\r\\n#o#  ##\\r\\n#o ooo#\\r\\n#   # #\\r\\n#######\\r\\n```\\r\\n\\r\\n\u5982\u679c\u77e5\u9053\u4e86\u5730\u56fe\u7684\u5272\u70b9\uff0c\u6211\u4eec\u5c31\u53ef\u4ee5\u4f18\u5316\u73a9\u5bb6\u884c\u52a8\u7684\u8ba1\u7b97\uff1a\\r\\n\\r\\n1. \u5982\u679c\u7bb1\u5b50\u4e0d\u5728\u5272\u70b9\u4e0a\uff0c\u8bf4\u660e\u73a9\u5bb6\u4e00\u5b9a\u80fd\u4ece\u7bb1\u5b50\u4e00\u4fa7\u79fb\u52a8\u5230\u53e6\u4e00\u4fa7\\r\\n2. \u5982\u679c\u7bb1\u5b50\u5728\u5272\u70b9\u4e0a\uff0c\u5982\u679c\u7bb1\u5b50\u4e24\u4fa7\u7684\u5757\u5904\u5728\u540c\u4e00\u4e2a\u8fde\u901a\u533a\u57df\uff0c\u90a3\u4e48\u4e5f\u80fd\u79fb\u52a8\uff0c\u53cd\u4e4b\u4e0d\u884c\\r\\n\\r\\n## \u53c2\u8003\u8d44\u6599\\r\\n\\r\\n[\u63a8\u7bb1\u5b50\u6e38\u620f\u7684\u4e00\u4e2a\u7bb1\u5b50\u63a8\u52a8\u8def\u5f84\u641c\u7d22\u7b97\u6cd5 \uff08\u4e8c\uff09](http://sokoban.ws/blog/?p=843)\\r\\n\\r\\n[\u7528\u6df1\u5ea6\u4f18\u5148\u641c\u7d22(DFS)\u786e\u5b9a\u56fe\u7684\u5272\u70b9](http://sokoban.ws/blog/?p=1000)"}]}}')}}]);