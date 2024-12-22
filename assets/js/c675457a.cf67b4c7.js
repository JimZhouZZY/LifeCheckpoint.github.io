"use strict";(self.webpackChunklife_checkpoint_github_io=self.webpackChunklife_checkpoint_github_io||[]).push([[5353],{2105:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>t,contentTitle:()=>c,default:()=>j,frontMatter:()=>d,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"\u4e0d\u53ef\u4ee5\u505a\u673a\u68b0\u964d\u795e\u6d3e/\u5b8c\u6574\u7684\u9879\u76ee\u4e0d\u5269\u4e24\u4e2a\u4e86\u5462/sokoban/index","title":"\u57fa\u4e8e LibGDX \u7684 Sokoban \u5f00\u53d1\u603b\u7ed3","description":"\u6211\u60f3\u4e86\u60f3\uff0c\u4e0b\u6b21\u8fd8\u662f\u4e0d\u8981\u628a\u671f\u672b\u4f5c\u4e1a\u5f53\u6210\u5927\u9879\u76ee\u641e\u4e86","source":"@site/docs/\u4e0d\u53ef\u4ee5\u505a\u673a\u68b0\u964d\u795e\u6d3e/\u5b8c\u6574\u7684\u9879\u76ee\u4e0d\u5269\u4e24\u4e2a\u4e86\u5462/sokoban/index.md","sourceDirName":"\u4e0d\u53ef\u4ee5\u505a\u673a\u68b0\u964d\u795e\u6d3e/\u5b8c\u6574\u7684\u9879\u76ee\u4e0d\u5269\u4e24\u4e2a\u4e86\u5462/sokoban","slug":"/\u4e0d\u53ef\u4ee5\u505a\u673a\u68b0\u964d\u795e\u6d3e/\u5b8c\u6574\u7684\u9879\u76ee\u4e0d\u5269\u4e24\u4e2a\u4e86\u5462/sokoban/","permalink":"/docs/\u4e0d\u53ef\u4ee5\u505a\u673a\u68b0\u964d\u795e\u6d3e/\u5b8c\u6574\u7684\u9879\u76ee\u4e0d\u5269\u4e24\u4e2a\u4e86\u5462/sokoban/","draft":false,"unlisted":false,"editUrl":"https://github.com/LifeCheckpoint/LifeCheckpoint.github.io/tree/main/docs/\u4e0d\u53ef\u4ee5\u505a\u673a\u68b0\u964d\u795e\u6d3e/\u5b8c\u6574\u7684\u9879\u76ee\u4e0d\u5269\u4e24\u4e2a\u4e86\u5462/sokoban/index.md","tags":[{"inline":true,"label":"program","permalink":"/docs/tags/program"}],"version":"current","frontMatter":{"description":"\u6211\u60f3\u4e86\u60f3\uff0c\u4e0b\u6b21\u8fd8\u662f\u4e0d\u8981\u628a\u671f\u672b\u4f5c\u4e1a\u5f53\u6210\u5927\u9879\u76ee\u641e\u4e86","sidebar_label":"Sokoban \u5f00\u53d1\u603b\u7ed3","title":"\u57fa\u4e8e LibGDX \u7684 Sokoban \u5f00\u53d1\u603b\u7ed3","authors":["Life_Checkpoint"],"tags":["program"]},"sidebar":"tutorialSidebar","previous":{"title":"Sovits-svc \u8bad\u7ec3\u7ecf\u9a8c\u5c0f\u7ed3","permalink":"/docs/\u4e0d\u53ef\u4ee5\u505a\u673a\u68b0\u964d\u795e\u6d3e/\u4e5f\u8bb8AI\u4f1a\u5e26\u6211\u53bb\u5f02\u4e16\u754c/sovits-svc-experience/"},"next":{"title":"\u719f\u7ec3\u638c\u63e1\u542f\u660e\u8d85\u7b97\u7684\u8fdb\u5165\u4e0e\u9000\u51fa","permalink":"/docs/\u4e0d\u53ef\u4ee5\u505a\u673a\u68b0\u964d\u795e\u6d3e/\u66b4\u529b\u51fa\u5947\u8ff9/qimin-intro/"}}');var i=r(4848),l=r(8453);const d={description:"\u6211\u60f3\u4e86\u60f3\uff0c\u4e0b\u6b21\u8fd8\u662f\u4e0d\u8981\u628a\u671f\u672b\u4f5c\u4e1a\u5f53\u6210\u5927\u9879\u76ee\u641e\u4e86",sidebar_label:"Sokoban \u5f00\u53d1\u603b\u7ed3",title:"\u57fa\u4e8e LibGDX \u7684 Sokoban \u5f00\u53d1\u603b\u7ed3",authors:["Life_Checkpoint"],tags:["program"]},c="\u57fa\u4e8e LibGDX \u7684 Sokoban \u5f00\u53d1\u603b\u7ed3",t={},h=[{value:"\u2705 \u4e3a\u4ec0\u4e48\u9009\u62e9 LibGDX\uff1f",id:"-\u4e3a\u4ec0\u4e48\u9009\u62e9-libgdx",level:3},{value:"\u274c \u4e3a\u4ec0\u4e48\u522b\u7528 LibGDX\uff1f",id:"-\u4e3a\u4ec0\u4e48\u522b\u7528-libgdx",level:3},{value:"\u9879\u76ee\u201c\u7279\u8272\u201d",id:"\u9879\u76ee\u7279\u8272",level:2},{value:"\u7f8e\u672f\u6709\u70b9\u96be",id:"\u7f8e\u672f\u6709\u70b9\u96be",level:2},{value:"\u524d\u7aef\u7684\u903b\u8f91\u96be\u9898",id:"\u524d\u7aef\u7684\u903b\u8f91\u96be\u9898",level:2},{value:"\u6e38\u620f\u901f\u5ea6\u89e3\u8026 FPS",id:"\u6e38\u620f\u901f\u5ea6\u89e3\u8026-fps",level:3},{value:"\u6df7\u6742\u7684\u5185\u90e8\u903b\u8f91",id:"\u6df7\u6742\u7684\u5185\u90e8\u903b\u8f91",level:3},{value:"\u6709\u70b9\u9e21\u808b\u7684...\u7528\u6237\u3001\u5b58\u6863\u72b6\u6001\u7ba1\u7406",id:"\u6709\u70b9\u9e21\u808b\u7684\u7528\u6237\u5b58\u6863\u72b6\u6001\u7ba1\u7406",level:2},{value:"\u4f3c\u4e4e\u4e0d\u7b97\u5f88\u96be\u7684\u903b\u8f91\u5de5\u7a0b",id:"\u4f3c\u4e4e\u4e0d\u7b97\u5f88\u96be\u7684\u903b\u8f91\u5de5\u7a0b",level:2},{value:"\u6b7b\u9501\u68c0\u6d4b",id:"\u6b7b\u9501\u68c0\u6d4b",level:3},{value:"AI \u6c42\u89e3\u5668",id:"ai-\u6c42\u89e3\u5668",level:3},{value:"\u8de8\u8bed\u8a00\u5f00\u53d1",id:"\u8de8\u8bed\u8a00\u5f00\u53d1",level:2}];function x(n){const e={a:"a",code:"code",del:"del",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.header,{children:(0,i.jsx)(e.h1,{id:"\u57fa\u4e8e-libgdx-\u7684-sokoban-\u5f00\u53d1\u603b\u7ed3",children:"\u57fa\u4e8e LibGDX \u7684 Sokoban \u5f00\u53d1\u603b\u7ed3"})}),"\n",(0,i.jsxs)(e.p,{children:["\u8fd9\u662f\u6211\u7684\u4e00\u4e2a",(0,i.jsx)(e.strong,{children:"\u671f\u672b\u4f5c\u4e1a"}),"\uff0c\u8981\u6c42\u5f00\u53d1\u4e00\u4e2a",(0,i.jsx)(e.strong,{children:"\u63a8\u7bb1\u5b50"}),"\u6e38\u620f\uff0c\u5e76\u4e14\u5b9e\u73b0\u4e00\u4e2a\u7ed9\u5b9a\u7684\u529f\u80fd"]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"\u9879\u76ee\u5730\u5740"})," \ud83d\udc49 ",(0,i.jsx)(e.a,{href:"https://github.com/LifeCheckpoint/Sokoban",children:"Sokoban"})]}),"\n",(0,i.jsxs)(e.p,{children:["\u77e5\u9053\u4f5c\u4e1a\u5185\u5bb9\u540e\u7acb\u9a6c\u5c31\u5f00\u59cb\u548c ",(0,i.jsx)(e.code,{children:"ChatGPT"})," \u8ba8\u8bba\u4ec0\u4e48\u5f15\u64ce\u6700\u5408\u9002\u5f00\u53d1\u6e38\u620f...\u4e00\u756a\u4e89\u8bba\uff0c\u6700\u540e\u9009\u4e86 ",(0,i.jsx)(e.code,{children:"LibGDX"})]}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"ChatGPT"})," ",(0,i.jsx)(e.strong,{children:"\u975e\u5e38\u81ea\u4fe1\u5730\u544a\u8bc9\u6211\uff1a"})]}),"\n",(0,i.jsx)(e.h3,{id:"-\u4e3a\u4ec0\u4e48\u9009\u62e9-libgdx",children:"\u2705 \u4e3a\u4ec0\u4e48\u9009\u62e9 LibGDX\uff1f"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u7c92\u5b50\u7cfb\u7edf"}),"\uff1aLibGDX \u5185\u7f6e\u7c92\u5b50\u5f15\u64ce\uff0c\u5e76\u4e14\u63d0\u4f9b\u4e86\u4e00\u4e2a\u7c92\u5b50\u7f16\u8f91\u5668\uff0c\u60a8\u53ef\u4ee5\u76f4\u89c2\u5730\u8bbe\u8ba1\u7c92\u5b50\u6548\u679c\u5e76\u5bfc\u5165\u6e38\u620f\u4e2d\u3002\u4f8b\u5982\uff0c\u5728\u7bb1\u5b50\u79fb\u52a8\u6216\u649e\u51fb\u5899\u58c1\u65f6\u751f\u6210\u7c92\u5b50\u6548\u679c\uff0c\u589e\u52a0\u6e38\u620f\u7684\u89c6\u89c9\u51b2\u51fb\u529b\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u52a8\u753b\u548c\u7f13\u52a8\u652f\u6301"}),"\uff1aLibGDX \u652f\u6301\u7f13\u52a8\u5e93\uff08\u5982 Universal Tween Engine\uff09\uff0c\u53ef\u4ee5\u4e3a\u63a8\u7bb1\u5b50\u3001\u79fb\u52a8\u3001\u7f29\u653e\u3001\u65cb\u8f6c\u7b49\u6548\u679c\u8bbe\u7f6e\u7f13\u52a8\u8fc7\u6e21\uff0c\u4f7f\u52a8\u753b\u66f4\u52a0\u81ea\u7136\u3002\u6bd4\u5982\uff0c\u5728\u63a8\u52a8\u7bb1\u5b50\u65f6\u589e\u52a0\u4e00\u4e2a\u8f7b\u5fae\u7684\u7f13\u52a8\u6216\u5f39\u6027\u6548\u679c\uff0c\u63d0\u5347\u4f53\u9a8c\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u753b\u9762\u52a8\u6548"}),"\uff1aLibGDX \u7684\u573a\u666f\u7ba1\u7406\u548c\u6444\u50cf\u673a\u63a7\u5236\u529f\u80fd\u8ba9\u60a8\u53ef\u4ee5\u5b9e\u73b0\u753b\u9762\u6447\u6643\u3001\u7f29\u653e\u7b49\u6548\u679c\uff0c\u9002\u7528\u4e8e\u6a21\u62df\u51b2\u51fb\u611f\u548c\u89c6\u89c9\u53cd\u9988\u3002\u4f8b\u5982\uff0c\u63a8\u7bb1\u5b50\u649e\u5230\u5899\u58c1\u65f6\u53ef\u4ee5\u8ba9\u6444\u50cf\u673a\u4ea7\u751f\u8f7b\u5fae\u6296\u52a8\uff0c\u63d0\u5347\u6e38\u620f\u7684\u4e92\u52a8\u611f\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u7b80\u5355\u6613\u7528"}),"\uff1aLibGDX \u63d0\u4f9b\u7684 API \u975e\u5e38\u6613\u4e8e\u4e0a\u624b\uff0c\u5bf9\u4e8e\u65b0\u624b\u6216\u5c0f\u56e2\u961f\u5f00\u53d1\u8005\u53cb\u597d\u3002\u60a8\u53ef\u4ee5\u5728\u8f83\u77ed\u65f6\u95f4\u5185\u638c\u63e1\u57fa\u672c\u64cd\u4f5c\uff0c\u540c\u65f6\u6846\u67b6\u652f\u6301\u8de8\u5e73\u53f0\uff0c\u53ef\u4ee5\u65b9\u4fbf\u5730\u5728\u684c\u9762\u548c\u79fb\u52a8\u7aef\u4e0a\u6d4b\u8bd5\u548c\u53d1\u5e03\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u55ef\uff0c\u9879\u76ee\u5b8c\u6210\u540e\uff0c\u6211\u4e5f\u8981",(0,i.jsx)(e.strong,{children:"\u5410\u69fd"}),"\u7684\u662f"]}),"\n",(0,i.jsx)(e.h3,{id:"-\u4e3a\u4ec0\u4e48\u522b\u7528-libgdx",children:"\u274c \u4e3a\u4ec0\u4e48\u522b\u7528 LibGDX\uff1f"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u8001\u571f\u6ca1\u7528\u8fc7\u7684\u7c92\u5b50\u7cfb\u7edf"}),"\uff1a\u5168\u7a0b\u6ca1\u7528\u8fc7"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u7b80\u5355\u5230\u6709\u70b9\u7b80\u964b\u7684\u52a8\u753b"}),"\uff1a\u6709\u52a8\u753b\uff0c\u6709\u7f13\u52a8\u66f2\u7ebf\uff0c\u8fd9\u70b9\u8fd8\u53ef\u4ee5\uff0c\u4f46\u662f\u52a8\u753b\u7684\u7a33\u5b9a\u6027...\u5b9e\u5728\u96be\u4ee5\u82df\u540c\uff08\u4f8b\u5982\uff0c\u4e24\u4e2a\u4f4d\u79fb\u52a8\u753b\u540c\u65f6\u6267\u884c\uff0c\u4e0d\u80fd\u6307\u671b\u6700\u7ec8\u4f4d\u79fb\u662f\u77e2\u91cf\u548c\uff1b\u4e24\u4e2a\u52a8\u753b\u660e\u660e\u5206\u5f00\u6267\u884c\uff0c\u5374\u80fd\u610f\u60f3\u4e0d\u5230\u5730\u6742\u4ea4\u5230\u4e00\u8d77\u5e76\u4ea7\u751f\u524d\u8ff0\u6548\u5e94\uff09"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Bug \u65e0\u6570"}),"\uff1a\u4e5f\u8bb8\u662f\u4e2a\u4eba\u5f00\u53d1\u7684\u539f\u56e0\u5427\uff0c\u611f\u89c9 bug \u65e0\u6570...\u4ece\u67e5\u627e\u4e86\u4e00\u5806\u7f51\u53cb\u7b54\u6848\u624d\u77e5\u9053",(0,i.jsx)(e.strong,{children:"\u6839\u672c\u6ca1\u6709\u4efb\u4f55\u6548\u679c"}),"\u7684\u201c\u8bbe\u7f6e\u7ec4\u4ef6\u987a\u5e8f\u201d ",(0,i.jsx)(e.code,{children:"setZIndex()"}),"\uff0c\u5230\u5404\u79cd\u5750\u6807\u7ba1\u7406\u7684\u6df7\u4e71\uff08\u5f53\u7136\u6211\u4e5f\u6709\u9505\uff09\uff0c\u6709\u70b9\u82e6\u4e0d\u582a\u8a00"]}),"\n"]}),"\n",(0,i.jsxs)(e.p,{children:["\u5efa\u8bae\u8fd8\u662f\u7528 ",(0,i.jsx)(e.code,{children:"Unity"})," or ",(0,i.jsx)(e.code,{children:"\u865a\u5e7b\u5f15\u64ce"})]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.em,{children:"\u4e2a\u4eba\u7684\u65b0\u624b\u4f53\u9a8c\u89d2\u5ea6\uff0c\u6a2a\u770b\u6210\u5cad\u4fa7\u6210\u5cf0\uff0c\u4eba\u4eba\u773c\u4e2d\u81ea\u4e0d\u540c"})}),"\n",(0,i.jsx)(e.h2,{id:"\u9879\u76ee\u7279\u8272",children:"\u9879\u76ee\u201c\u7279\u8272\u201d"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u57fa\u4e8e\u4e3b\u6d41\u6e38\u620f\u5f15\u64ce LibGDX \u5f00\u53d1\uff0c\u79fb\u690d\u6027\u5f3a\uff0c\u53ef\u7ef4\u62a4\u6027\u9ad8"}),"\n",(0,i.jsx)(e.li,{children:"\u5141\u8bb8\u7d20\u6750\u5f02\u6b65\u52a0\u8f7d\uff0c\u652f\u6301\u542f\u7528 Mipmap MSAA \u7b49\u663e\u793a\u4f18\u5316"}),"\n",(0,i.jsx)(e.li,{children:"\u539f\u521b\u7f8e\u672f\u7d20\u6750\uff0c\u9644\u52a0\u7d20\u6750\u6e90\u6587\u4ef6\uff0c\u5b9e\u73b0\u5927\u91cf\u81ea\u5b9a\u4e49\u7684 GUI \u52a8\u753b\u7ec4\u4ef6\uff0c\u754c\u9762\u7f8e\u89c2\u6574\u6d01"}),"\n",(0,i.jsx)(e.li,{children:"GUI \u4ee3\u7801\u91c7\u7528 \u670d\u52a1\u5b9a\u4f4d\u5668 \u4e0e \u5355\u4f8b\u6a21\u5f0f \u7684\u7ed3\u5408\u8bbe\u8ba1 \uff0c\u901a\u8fc7 gameMain \u5206\u53d1\u5168\u5c40\u63a7\u5236\u53e5\u67c4\uff0c\u7b80\u5316\u5f00\u53d1\uff0c\u91cd\u7528\u7387\u9ad8"}),"\n",(0,i.jsx)(e.li,{children:"\u6838\u5fc3\u529f\u80fd\u57fa\u4e8e TestNG \u8fdb\u884c\u4e86\u5145\u5206\u5355\u5143 / \u8986\u76d6\u7387\u6d4b\u8bd5"}),"\n",(0,i.jsx)(e.li,{children:"\u901a\u8fc7 JNI \u9ad8\u6548\u8fdb\u884c\u8de8\u8bed\u8a00\u534f\u4f5c\uff0c\u5e76\u4e14\u4fdd\u8bc1\u6e38\u620f\u5bf9\u7279\u5b9a\u5e73\u53f0 api \u7684\u517c\u5bb9"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\uff08\u767c\u81ea\u6211\u7684Github\uff09"}),"\n",(0,i.jsx)(e.p,{children:"\u5982\u679c\u9010\u6761\u62c6\u89e3\u7684\u8bdd\uff0c\u5176\u5b9e\u5e94\u8be5\u662f\u8fd9\u6837\u7684..."}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u5439\u7684"}),(0,i.jsx)(e.th,{children:"\u5b9e\u9645\u4e0a"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u2705\u79fb\u690d\u6027\u5f3a"}),(0,i.jsx)(e.td,{children:"\u274c\u7528\u4e86\u7279\u5b9a\u5e73\u53f0\u7f16\u8bd1\u7684\u6587\u4ef6\u6846\uff0c\u53ea\u80fd\u5728 Win \u4e0a\u8dd1"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u2705\u53ef\u7ef4\u62a4\u6027\u9ad8"}),(0,i.jsx)(e.td,{children:"\u274c\u53ef\u7ef4\u62a4\u6027\u9ad8 \u2260 \u6709\u4eba\u7ef4\u62a4"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u2705\u5927\u91cf\u81ea\u5b9a\u4e49\u52a8\u753b\u7ec4\u4ef6"}),(0,i.jsx)(e.td,{children:"\u274c\u81ea\u5e26\u7684 UI \u7ec4\u4ef6 bug \u4e00\u5806\uff0c\u81ea\u5df1\u9020\u8f6e\u5b50"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u2705\u754c\u9762\u7f8e\u89c2\u6574\u6d01"}),(0,i.jsx)(e.td,{children:"\u274c\u590d\u6742\u7684\u6211\u4e5f\u4e0d\u4f1a\uff08\uff09"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u2705\u670d\u52a1\u5b9a\u4f4d\u5668 + \u5355\u4f8b \u8bbe\u8ba1\u6a21\u5f0f"}),(0,i.jsx)(e.td,{children:"\u274c\u505a\u5927\u4e86\u53d1\u73b0\u6839\u672c\u4e0d\u597d\u7528\uff0c\u61d2\u5f97\u91cd\u6784\u4e86"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u2705\u7b80\u5316\u5f00\u53d1"}),(0,i.jsx)(e.td,{children:"\u274c\u8ba9\u5f00\u53d1\u66f4\u5934\u79c3"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u2705\u91cd\u7528\u7387\u9ad8"}),(0,i.jsx)(e.td,{children:"\u274c\u6307\u590d\u5236\u7c98\u8d34\u952e\u7684\u91cd\u7528\u7387\u9ad8"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u2705\u5145\u5206\u5355\u5143\u6d4b\u8bd5"}),(0,i.jsx)(e.td,{children:"\u274c\u53ea\u6d4b\u4e86\u51e0\u4e2a\u6838\u5fc3\u903b\u8f91\u529f\u80fd\uff0c\u6709\u7684\u751a\u81f3\u6ca1\u901a\u8fc7"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u2705JNI \u9ad8\u6548\u8de8\u8bed\u8a00\u534f\u4f5c"}),(0,i.jsx)(e.td,{children:"\u274c\uff08\u89c1\u7b2c\u4e00\u6761\uff09"})]})]})]}),"\n",(0,i.jsx)(e.p,{children:"\u8bf4\u4e0d\u5b9a\u8fd9\u4e5f\u7b97\u662f\u5f00\u53d1\u5e38\u6001\uff08\uff09"}),"\n",(0,i.jsx)(e.h2,{id:"\u7f8e\u672f\u6709\u70b9\u96be",children:"\u7f8e\u672f\u6709\u70b9\u96be"}),"\n",(0,i.jsx)(e.p,{children:"rt\uff0c\u7f8e\u672f\u5bf9\u4e8e\u6211\u4eec\u8fd9\u79cd\u7406\u5de5\u6765\u8bf4\u8fd8\u662f\u6709\u70b9\u96be\u5ea6\u7684\uff08\uff09\u867d\u7136\u4e5f\u641e\u8fc7\u4e00\u4e9b\u8bbe\u8ba1\u4e0e\u5ba1\u7f8e\u8bad\u7ec3\uff0c\u4f46\u662f\u5b9e\u9645\u4e0a\u624b\u8fd8\u662f\u4f1a\u6293\u778e"}),"\n",(0,i.jsxs)(e.p,{children:["\u90a3\u5c31\u5148\u627e\u4e00\u4e2a",(0,i.jsx)(e.strong,{children:"\u6837\u677f"}),"\u5b66\u5b66\u5427\u3002\u4e8e\u662f\u6700\u7ec8\u6210\u54c1\u662f..."]}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"Where Are You From"}),(0,i.jsx)(e.th,{children:"Where Are You Go"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.strong,{children:"Patrix Parabox (\u5e15\u91cc\u514b\u7684\u7bb1\u5b50)"})}),(0,i.jsx)(e.td,{children:"\u6574\u4f53\u7b80\u7ea6\u98ce\u683c\u6307\u5bfc\uff0c\u7bb1\u5b50\u3001\u5730\u5757\u8bbe\u8ba1\u3001\u7c92\u5b50\u6548\u679c\u7b49"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.strong,{children:"Baba is You"})}),(0,i.jsx)(e.td,{children:"\u89d2\u8272\u8bbe\u8ba1\u3001UI\u98ce\u683c\u8bbe\u8ba1"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:(0,i.jsx)(e.strong,{children:"The Dance of Fire and Ice (\u51b0\u4e0e\u706b\u4e4b\u821e)"})}),(0,i.jsx)(e.td,{children:"\u7f16\u8f91\u5668\u754c\u9762\u8bbe\u8ba1"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u4e00\u62cd\u8111\u888b\u60f3\uff0c\u6ca1\u6709\u53c2\u8003\u7684"}),(0,i.jsx)(e.td,{children:"\u7ec4\u4ef6\u52a8\u753b\u8bbe\u8ba1"})]})]})]}),"\n",(0,i.jsxs)(e.p,{children:["\u867d\u7136\u8bf4\u662f\u4e2a\u6742\u4ea4\u4f5c\uff0c\u4f46\u662f\u9664\u4e86\u80cc\u666f\u97f3\u4e50\u5916\u7684",(0,i.jsx)(e.strong,{children:"\u6240\u6709\u7d20\u6750\u90fd\u662f\u6211\u4eec\u539f\u521b\u7ed8\u5236\u7684"}),"\uff0c\u5de5\u7a0b\u6587\u4ef6\u4e5f\u653e\u5728\u9879\u76ee\u7684\u6839\u76ee\u5f55\u4e0b\u4e86"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"For Example \u590d\u9009\u6846\u52a8\u753b\u7684\u5b9e\u73b0"})}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsx)(e.li,{children:"\u9996\u5148\u901a\u8fc7 Photoshop \u5b8c\u6210\u57fa\u7840\u56fe\u5c42\u7684\u7ed8\u5236\uff0c\u5e76\u5229\u7528\u5de5\u5177\u5bfc\u51fa\u4e3a Json \u683c\u5f0f"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"PS \u7ed8\u5236\u590d\u9009\u6846",src:r(3624).A+"",width:"2560",height:"1379"})}),"\n",(0,i.jsxs)(e.ol,{start:"2",children:["\n",(0,i.jsx)(e.li,{children:"\u901a\u8fc7 Spine \u8f6f\u4ef6\u7ed8\u5236\u590d\u9009\u6846\u7684\u52a8\u753b\uff0c\u4f8b\u5982\u8fdb\u5165\u3001\u9000\u51fa\u3001\u7981\u7528\u7b49"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Spine \u5236\u4f5c\u590d\u9009\u6846\u52a8\u753b",src:r(4806).A+"",width:"2560",height:"1380"})}),"\n",(0,i.jsxs)(e.ol,{start:"3",children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsxs)(e.p,{children:["\u5c06\u7d20\u6750\u5bfc\u51fa\uff0c\u5e76\u7528\u7edf\u4e00\u7684\u7d20\u6750\u52a0\u8f7d\u7c7b ",(0,i.jsx)(e.code,{children:"AssetsPathManager"})," \u7c7b\u5bfc\u5165\u9879\u76ee\u4e2d"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u4f7f\u7528\u7d20\u6750\u521b\u5efa\u7ec4\u4ef6"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"\u83b7\u53d6\u7d20\u6750\u5173\u952e\u4ee3\u7801",src:r(7986).A+"",width:"2280",height:"900"})}),"\n",(0,i.jsx)(e.h2,{id:"\u524d\u7aef\u7684\u903b\u8f91\u96be\u9898",children:"\u524d\u7aef\u7684\u903b\u8f91\u96be\u9898"}),"\n",(0,i.jsx)(e.p,{children:"\u5176\u5b9e\u524d\u7aef\u5f00\u53d1\u5e76\u4e0d\u662f\u5199\u4e00\u4e2a UI \u5c31\u597d\u4e86\uff0c\u56e0\u4e3a\u7ec4\u4ef6\u4e4b\u95f4\u4f1a\u4ea7\u751f\u5f88\u591a\u4ea4\u4e92\uff0c\u6240\u4ee5\u4f9d\u7136\u9700\u8981\u6ce8\u91cd\u4e00\u4e9b\u903b\u8f91\u3002\u5c31\u6bd4\u5982..."}),"\n",(0,i.jsx)(e.h3,{id:"\u6e38\u620f\u901f\u5ea6\u89e3\u8026-fps",children:"\u6e38\u620f\u901f\u5ea6\u89e3\u8026 FPS"}),"\n",(0,i.jsx)(e.p,{children:"\u8fd9\u4f3c\u4e4e\u662f\u4e00\u4e2a\u6bd4\u8f83\u5e38\u89c1\u7684\u8bdd\u9898\uff0c\u5982\u679c\u6e38\u620f\u4e2d\u7269\u4f53\u7684\u79fb\u52a8\u901f\u5ea6\u5173\u8054\u5230 FPS\uff0c\u6709\u4e9b\u6027\u80fd\u592a\u597d\u7684\u7535\u8111\u5feb\u5230\u98de\u8d77\uff0c\u6709\u4e9b\u6027\u80fd\u592a\u5dee\u7684\u53c8\u6162\u5230\u96be\u53d7\uff0c\u8fd9\u53ef\u4e0d\u597d"}),"\n",(0,i.jsxs)(e.p,{children:["\u7136\u800c",(0,i.jsx)(e.strong,{children:"\u6211\u5728 30% \u5f00\u53d1\u8fdb\u5ea6\u7684\u65f6\u5019\u624d\u53d1\u73b0\u8fd9\u4e2a\u95ee\u9898"}),"\uff0c\u6ca1\u529e\u6cd5\uff0c\u53ea\u80fd\u63a8\u5012\u91cd\u6784\uff0c\u88ab\u8fd9\u4e9b\u95ee\u9898\u6298\u78e8\u4e86\u4e00\u4e24\u5929\uff1a"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u6709\u4e9b\u7ec4\u4ef6\u7684\u52a8\u753b\u66f4\u65b0\u662f",(0,i.jsx)(e.strong,{children:"\u4f9d\u7167\u771f\u5b9e\u65f6\u95f4"}),"\u66f4\u65b0\u7684\uff0c\u5e76\u4e0d\u4f9d\u8d56\u4e8e\u5e27\u65f6\u95f4"]}),"\n",(0,i.jsx)(e.li,{children:"\u8981\u8003\u8651\u6781\u7aef\u6ce2\u52a8\u7684 FPS\uff08\u4f8b\u5982\u6389\u5e27\uff09\uff0c\u4fdd\u8bc1\u903b\u8f91\u6b63\u786e\u5904\u7406"}),"\n",(0,i.jsxs)(e.li,{children:["\u8003\u8651\u5e27\u65f6\u95f4",(0,i.jsx)(e.strong,{children:"\u6ce2\u52a8"}),"\uff0c\u9700\u8981\u6bcf\u9694\u4e00\u6bb5\u65f6\u95f4\u8865\u4e0a\u8bef\u5dee\u65f6\u95f4\u7d2f\u79ef\u800c\u6210\u7684\u5e27\uff0c\u76f8\u5e94\u7684\u5185\u90e8\u903b\u8f91",(0,i.jsx)(e.strong,{children:"\u4e0d\u80fd\u53d1\u751f\u91cd\u590d\u5904\u7406"})]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u4e0d\u7b80\u5355\uff0c\u4e0d\u7b80\u5355\uff08\u611f\u53f9\uff09"}),"\n",(0,i.jsx)(e.h3,{id:"\u6df7\u6742\u7684\u5185\u90e8\u903b\u8f91",children:"\u6df7\u6742\u7684\u5185\u90e8\u903b\u8f91"}),"\n",(0,i.jsxs)(e.p,{children:["\u4e00\u5f00\u59cb\u7684\u8bbe\u60f3",(0,i.jsx)(e.strong,{children:"\u5f88\u7f8e\u597d"}),"\uff0c\u60f3\u7740\u53ef\u4ee5\u8fdb\u884c\u5982\u4e0b\u7684\u5206\u5c42\u7ed3\u6784\uff1a"]}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u663e\u793a\u5c42"})," \u8d1f\u8d23\u7ec4\u4ef6\u7684\u663e\u793a\u5c42\u9762\u4ea4\u4e92"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u4e2d\u95f4\u5c42"})," \u8d1f\u8d23\u7ec4\u4ef6\u903b\u8f91\u548c\u5185\u90e8\u903b\u8f91\u7684\u4ea4\u4e92"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"\u903b\u8f91\u5c42"})," \u8d1f\u8d23\u6e38\u620f\u903b\u8f91\u7684\u8fd0\u884c"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u5b9e\u9645\u4e0a\u7f16\u5199\u4e86\u624d\u53d1\u73b0\uff1a\u8bbe\u60f3\u592a\u7f8e\u597d\uff0c\u5b9e\u9645\u4e0a\u53ef\u884c\u6027..."}),"\n",(0,i.jsxs)(e.p,{children:["OK For example, \u5728\u8bbe\u7f6e\u754c\u9762\u7684\u5c4f\u5e55\u7c7b ",(0,i.jsx)(e.code,{children:"SettingScene"})," \u4e2d\u6709\u4e00\u4e2a\u6309\u94ae ",(0,i.jsx)(e.code,{children:"Vsync"}),"\uff0c\u8868\u793a\u662f\u5426\u5f00\u542f\u5782\u76f4\u540c\u6b65"]}),"\n",(0,i.jsx)(e.p,{children:"\u5f53\u6211\u4eec\u70b9\u51fb\u65f6\uff0c\u590d\u9009\u6846\u5c06\u4f1a\u6539\u53d8\u72b6\u6001\uff08\u9009\u4e2d <-> \u672a\u9009\u4e2d\uff09\uff0c\u540c\u65f6\u5f15\u64ce\u4f1a\u4f20\u9012\u7ed9\u6211\u4eec\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\uff0c\u8868\u793a\u70b9\u51fb\u4e8b\u4ef6\u7684\u53d1\u751f"}),"\n",(0,i.jsxs)(e.p,{children:["\u95ee\u9898\u6765\u4e86\uff1a",(0,i.jsx)(e.strong,{children:"\u56de\u8c03\u51fd\u6570\u88ab\u8c03\u7528\u65f6\uff0c\u590d\u9009\u6846\u7684\u72b6\u6001\u662f\u9009\u4e2d\u8fd8\u662f\u672a\u9009\u4e2d\uff1f"})]}),"\n",(0,i.jsx)(e.p,{children:"\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u72b6\u6001\u4e0d\u4e00\u81f4\u7684\u95ee\u9898\uff0c\u6211\u4eec\u5199\u4e00\u4e2a\u590d\u9009\u6846\u7c7b\uff0c\u56de\u8c03\u51fd\u6570\u4e0e\u52a8\u753b\u6548\u679c\u90fd\u4f1a\u5728\u590d\u9009\u6846\u7c7b\u4e2d\u88ab\u5904\u7406\uff0c\u800c\u590d\u9009\u6846\u7c7b\u53c8\u4f1a\u53d1\u8d77\u4e00\u4e2a\u65b0\u7684\u56de\u8c03\u5e76\u4f20\u9012\u9009\u4e2d\u72b6\u6001\uff0c\u7528\u6237\u9700\u8981\u5b9e\u73b0\u8fd9\u4e2a\u56de\u8c03\u51fd\u6570"}),"\n",(0,i.jsx)(e.p,{children:"\u73b0\u5728\u6211\u4eec\u7684\u95ee\u9898\u6765\u5230\u4e86\u5b9e\u73b0\u590d\u9009\u6846\u7c7b\u7684\u56de\u8c03\u51fd\u6570\uff0c\u6211\u4eec\u5e0c\u671b\u8bbe\u7f6e\u66f4\u6539\u540e\u7acb\u523b\u68c0\u67e5\u5dee\u5f02\uff0c\u5982\u679c\u5b58\u5728\u4e0e\u539f\u8bbe\u7f6e\u7684\u5dee\u5f02\uff0c\u5219\u663e\u793a\u4fdd\u5b58\u6309\u94ae"}),"\n",(0,i.jsxs)(e.p,{children:["\u68c0\u6d4b\u8bbe\u7f6e\u6587\u4ef6\u662f\u5426\u76f8\u540c\u7684\u903b\u8f91\u53ef\u4ee5\u653e\u5230 ",(0,i.jsx)(e.code,{children:"GameSetting"})," \u7684\u903b\u8f91\u7c7b\u4e2d\u5b9e\u73b0\uff0c\u7136\u800c\u60f3\u8981\u83b7\u5f97\u5f53\u524d\u7684\u8bbe\u7f6e\u60c5\u51b5\uff0c\u5c31\u9700\u8981\u53bb\u67e5\u770b\u5176\u5b83\u7ec4\u4ef6\u7684\u72b6\u6001"]}),"\n",(0,i.jsxs)(e.p,{children:["\u7136\u800c\uff0c",(0,i.jsx)(e.strong,{children:"\u5176\u5b83\u7ec4\u4ef6\u7684\u7c7b\u578b\u8f83\u591a"}),"\uff0c\u6709\u590d\u9009\u6846\u3001\u9009\u62e9\u5668\u3001\u6ed1\u5757\u6761\u7b49\uff0c\u5982\u679c\u6bcf\u4e2a\u7ec4\u4ef6\u53d1\u751f\u53d8\u66f4\u90fd\u53bb\u8bfb\u53d6\u8fd9\u4e9b\u7ec4\u4ef6\u7684\u503c\uff0c\u663e\u5f97\u5341\u5206\u5197\u6742"]}),"\n",(0,i.jsxs)(e.p,{children:["\u6240\u4ee5\u4e5f\u8bb8\u9700\u8981\u5b9a\u4e49\u4e00\u4e2a ",(0,i.jsx)(e.code,{children:"onSettingChanged"})," \u7684\u65b9\u6cd5\uff0c\u8bfb\u53d6\u6240\u6709\u8bbe\u7f6e\u4fe1\u606f\u5e76\u8fdb\u884c\u6bd4\u5bf9"]}),"\n",(0,i.jsxs)(e.p,{children:["\u5982\u679c\u53d1\u73b0\u4e0d\u4e00\u81f4\uff0c\u8c03\u7528 ",(0,i.jsx)(e.code,{children:"setSaveButtonVisiblility"})," \u65b9\u6cd5\u663e\u793a\u4fdd\u5b58\u6309\u94ae"]}),"\n",(0,i.jsx)(e.p,{children:"\u770b\u4e0a\u53bb\u6bd4\u8f83\u7f8e\u597d\uff0c\u7136\u800c\u6bcf\u6b21\u6211\u4eec\u5411\u8bbe\u7f6e\u754c\u9762\u589e\u52a0\u8bbe\u7f6e\u7ec4\u4ef6\u7684\u65f6\u5019\uff0c\u90fd\u8981\u505a\u5982\u4e0b\u5de5\u4f5c\uff1a"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\u5728 ",(0,i.jsx)(e.code,{children:"GameSetting"})," \u7c7b\u4e2d\u589e\u52a0\u5bf9\u5e94\u7684\u8bbe\u7f6e\u9879"]}),"\n",(0,i.jsx)(e.li,{children:"\u5c06\u7ec4\u4ef6\u7c7b\u5bf9\u8c61\u6dfb\u52a0\u5230\u8bbe\u7f6e\u754c\u9762\u4e2d"}),"\n",(0,i.jsxs)(e.li,{children:["\u5728 ",(0,i.jsx)(e.code,{children:"onSettingChanged"})," \u65b9\u6cd5\u4e2d\u7f16\u5199\u5bf9\u5e94\u7684\u8bfb\u53d6\u903b\u8f91"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"..."}),"\n",(0,i.jsxs)(e.p,{children:["\u5341\u5206\u7e41\u7410\uff0c\u4e8e\u662f\u6211\u4eec\u53c8\u8981\u60f3\uff0c\u662f\u4e0d\u662f\u53ef\u4ee5\u5199\u4e00\u4e2a\u63a5\u53e3\uff0c\u7edf\u4e00\u4e3a\u8bbe\u7f6e\u9879\u914d\u7f6e\u7ec4\u4ef6\u3001\u7c7b\u4fe1\u606f\u4e0e\u503c\u4fe1\u606f\uff1f\u4e8e\u662f\u53ef\u4ee5\u5199\u4e00\u4e2a ",(0,i.jsx)(e.code,{children:"SettingInterface"})," \u63a5\u53e3\uff0c\u5b9e\u73b0\u8fd9\u4e2a\u63a5\u53e3\u7684\u8bbe\u7f6e\u7c7b\u53ef\u4ee5\u88ab\u81ea\u52a8\u6ce8\u518c\u5230 ",(0,i.jsx)(e.code,{children:"GameSetting"})," \u4ee5\u53ca\u88ab\u6dfb\u52a0\u5230\u8bbe\u7f6e\u754c\u9762\u4e2d"]}),"\n",(0,i.jsxs)(e.p,{children:["\u5bf9\u4e8e\u5404\u79cd\u4e0d\u4e00\u81f4\u7684\u8bbe\u7f6e\u7c7b\u578b\uff08\u6570\u503c\u3001\u9009\u4e2d\u7b49\uff09\uff0c\u5b9e\u73b0\u4e00\u4e2a\u9002\u914d\u5668 ",(0,i.jsx)(e.code,{children:"SettingAdapter"}),"\uff0c\u53ef\u4ee5\u5c06\u8bbe\u7f6e\u4e2d\u7684\u5404\u79cd\u7c7b\u578b\u8f6c\u5316\u4e3a\u7edf\u4e00\u7684\u683c\u5f0f\uff0c\u65b9\u4fbf ",(0,i.jsx)(e.code,{children:"Json"})," \u5b9e\u73b0\u5e8f\u5217\u5316..."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.del,{children:"\uff08\u5df2\u7ecf\u5f00\u59cb\u5404\u79cd\u8bbe\u8ba1\u6a21\u5f0f\u4e86\uff09"})}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.strong,{children:"TIP \u4ee5\u4e0a\u8bbe\u60f3\u5927\u90e8\u5206\u672a\u5b9e\u73b0\uff0c\u56e0\u4e3a\u6211\u53ea\u662f\u5b8c\u6210 Java \u4f5c\u4e1a\u7f62\u4e86..."})}),"\n",(0,i.jsxs)(e.p,{children:["\u7531\u6b64\u53ef\u89c1\u5176\u590d\u6742...\u5b9e\u9645\u4e0a\uff0c",(0,i.jsx)(e.strong,{children:"\u547d\u4ee4\u5f0f"}),"\u7684\u8bbe\u8ba1\u6a21\u5f0f\u4f3c\u4e4e\u80fd\u591f\u8fdb\u4e00\u6b65\u4fc3\u8fdb\u8fd9\u4e9b\u903b\u8f91\u7684\u89e3\u8026\uff0c\u53ef\u4ee5\u67e5\u627e\u76f8\u5173\u8d44\u6599\u4e86\u89e3"]}),"\n",(0,i.jsx)(e.p,{children:"\u6700\u540e\u518d\u5217\u4e00\u4e2a\u524d\u7aef\u7684\u95ee\u9898\u6e05\u5355"}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"\u9047\u5230\u7684\u95ee\u9898"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"\u662f\u5426\u89e3\u51b3"})}),(0,i.jsx)(e.th,{children:(0,i.jsx)(e.strong,{children:"\uff08\u9884\u671f\uff09\u89e3\u51b3\u65b9\u6848"})})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u5355\u7269\u4f53\u591a\u52a8\u753b\u540c\u65f6\u6267\u884c\uff0c\u4e92\u76f8\u5e72\u6270\u4ea7\u751f\u975e\u9884\u671f\u7ed3\u679c"}),(0,i.jsx)(e.td,{children:"\u2705"}),(0,i.jsxs)(e.td,{children:["\u521b\u5efa ",(0,i.jsx)(e.code,{children:"SingleActionInstanceManager"})," \u7ba1\u7406\u5668\uff0c\u5982\u679c\u6709\u65b0\u52a8\u753b\u521b\u5efa\uff0c\u5219\u7acb\u523b\u91cd\u7f6e\u65e7\u52a8\u753b\u5e76\u6267\u884c\u65b0\u52a8\u753b"]})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u9700\u8981\u4e00\u4e9b\u6ee4\u955c\uff0c\u4f8b\u5982\u80cc\u666f\u6a21\u7cca"}),(0,i.jsx)(e.td,{children:"\u274c"}),(0,i.jsx)(e.td,{children:"\u6211\u4e5f\u4e0d\u77e5\u9053\u4e3a\u4ec0\u4e48 Shader \u4e0d\u8d77\u6548\u679c\uff08\u60ca\u6050\uff09"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"LibGDX \u7684\u5b57\u4f53\u652f\u6301\u592a\u7b80\u964b\u4e86\uff0c\u8fd8\u6709\u5404\u79cd bug"}),(0,i.jsx)(e.td,{children:"\u2705"}),(0,i.jsxs)(e.td,{children:["\u628a\u6240\u6709\u7684\u5b57\u4f53\u753b\u5728\u4f4d\u56fe\u4e0a\uff0c\u7528 ",(0,i.jsx)(e.code,{children:"FontManager"})," \u5207\u5272\u6210\u5355\u5b57\uff0c\u518d\u7528 ",(0,i.jsx)(e.code,{children:"ImageFontStringObject"})," \u62fc\u5408\u6210\u6587\u672c\u7ec4\u4ef6"]})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"LibGDX \u5b98\u65b9\u81ea\u5e26\u7684\u7269\u7406\u5f15\u64ce\u6ca1\u5f04\u660e\u767d..."}),(0,i.jsx)(e.td,{children:"\u2705"}),(0,i.jsxs)(e.td,{children:["\u9020\u8f6e\u5b50\uff0c\u5305\u62ec\u52a0\u901f\u5ea6\u4f4d\u79fb\u7ba1\u7406\u5668 ",(0,i.jsx)(e.code,{children:"AccelerationMovingManager"})," \u548c\u78b0\u649e\u7ba1\u7406\u5668 ",(0,i.jsx)(e.code,{children:"OverlappingManager"})]})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u6211\u5e0c\u671b\u753b\u9762\u80fd\u8ddf\u7740\u9f20\u6807\u3001\u4eba\u7269...\u4e00\u8d77\u52a8"}),(0,i.jsx)(e.td,{children:"\u2705"}),(0,i.jsxs)(e.td,{children:[(0,i.jsx)(e.code,{children:"MouseMovingTraceManager"}),"\uff0c\u8ba1\u7b97\u5404\u79cd\u5750\u6807\u53d8\u6362\uff0c\u8c03\u6574\u753b\u9762\u79fb\u52a8\u7684\u5e45\u5ea6\u5927\u5c0f"]})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u4e0d\u4f7f\u7528\u5b98\u65b9\u5de5\u5177\uff0c\u6211\u5e0c\u671b\u80fd\u7b80\u6613\u5730\u81ea\u5b9a\u4e49\u7c92\u5b50"}),(0,i.jsx)(e.td,{children:"\u2705"}),(0,i.jsxs)(e.td,{children:[(0,i.jsx)(e.code,{children:"BackgroundGrayParticleManager"})," \u7b49\u7ba1\u7406\u5668\uff0c\u7edf\u4e00\u5411\u5c4f\u5e55\u5bf9\u8c61\u6dfb\u52a0\u7c92\u5b50\uff0c\u5e76\u7ba1\u7406\u7c92\u5b50\u751f\u547d\u5468\u671f"]})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"\u6709\u4e00\u4e9b\u7ec4\u4ef6\u662f\u7531\u591a\u4e2a\u5176\u5b83\u7ec4\u4ef6\u7ec4\u5408\u800c\u6210\uff0c\u5982\u4f55\u7ba1\u7406\u5462..."}),(0,i.jsx)(e.td,{children:"\u2705\uff0c\u4f46\u662f\u274c"}),(0,i.jsxs)(e.td,{children:["\u867d\u7136\u5f00\u53d1\u4e86 ",(0,i.jsx)(e.code,{children:"SokobanCombineObject"}),"\uff0c\u7136\u800c\u7b97\u662f\u4e00\u4e2a\u5931\u8d25\u7684\u7ed3\u6784\uff0c\u4e0d\u4ec5\u4e0e Actor \u4e0d\u517c\u5bb9\uff0c\u5f00\u53d1\u7ec4\u4ef6\u65f6\u4e5f\u8bf8\u591a\u4e0d\u4fbf\uff0c\u53ea\u80fd\u54ac\u7259\u786c\u5fcd"]})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"LibGDX \u6ca1\u6709\u65e0 bug \u7684\u73b0\u6210\u6587\u672c\u6846\u63a7\u4ef6\uff08\u60b2\uff09"}),(0,i.jsx)(e.td,{children:"\u2705"}),(0,i.jsxs)(e.td,{children:["\u5199\u4e86\u4e00\u4e2a ",(0,i.jsx)(e.code,{children:"InputTextField"})," \u7c7b\uff0c\u901a\u8fc7\u6a21\u62df\u5149\u6807\u3001\u7126\u70b9\u3001\u9000\u683c\u4e0e\u8f93\u5165\u7b49\uff0c\u634f\u4e86\u4e00\u4e2a\u8fd8\u7b97\u80fd\u770b\u7684\u6587\u672c\u6846\uff08\u7136\u800c\u53ea\u80fd\u8f93\u5165\u82f1\u6587\uff09"]})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"Java Swing \u7684\u6587\u4ef6\u9009\u62e9\u5668\u4e11\u7206\u4e86"}),(0,i.jsx)(e.td,{children:"\u2705"}),(0,i.jsx)(e.td,{children:"\u8de8\u8bed\u8a00\u5f00\u53d1\uff0c\u8c03\u7528\u7cfb\u7edf API \u5b9e\u73b0\u539f\u751f\u6587\u4ef6\u9009\u62e9\u6846\u8c03\u7528\uff0c\u89c1\u4e0b\u6587"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"..."}),(0,i.jsx)(e.td,{children:"..."}),(0,i.jsx)(e.td,{children:"..."})]})]})]}),"\n",(0,i.jsx)(e.p,{children:"\u771f\u5fc3\u795d\u613f\u5404\u4f4d\u4ee5\u540e\u80fd\u591f\u4e0d\u78b0\u4e0a\u8fd9\u4e9b\u95ee\u9898\ud83d\ude4f"}),"\n",(0,i.jsx)(e.h2,{id:"\u6709\u70b9\u9e21\u808b\u7684\u7528\u6237\u5b58\u6863\u72b6\u6001\u7ba1\u7406",children:"\u6709\u70b9\u9e21\u808b\u7684...\u7528\u6237\u3001\u5b58\u6863\u72b6\u6001\u7ba1\u7406"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.del,{children:"\u5355\u673a\u6e38\u620f\u7528\u4e0d\u7740\u7528\u6237\u7ba1\u7406\u5427\uff08\u5410\u69fd\uff09"})}),"\n",(0,i.jsxs)(e.p,{children:["\u56e0\u4e3a\u9879\u76ee\u8981\u6c42\uff0c\u6240\u4ee5\u505a\u4e86\u7528\u6237\u7ba1\u7406\u548c\u5b58\u6863\u7ba1\u7406\u3002\u8bbe\u8ba1\u7684\u65f6\u5019\u91c7\u7528\u4e86",(0,i.jsx)(e.strong,{children:"\u5b58\u6863\u9644\u5c5e\u4e8e\u7528\u6237"}),"\u7684\u65b9\u5f0f\uff0c\u5355\u7528\u6237\u5355\u6587\u4ef6"]}),"\n",(0,i.jsxs)(e.p,{children:["\u975e\u5e38",(0,i.jsx)(e.strong,{children:"\u591a\u6b64\u4e00\u4e3e"}),"\u4e14\u83ab\u540d\u5176\u5999\uff08\u7b11\uff09\u5730\u4e3a\u5b58\u6863\u505a\u4e86\u52a0\u5bc6"]}),"\n",(0,i.jsx)(e.p,{children:"\u52a0\u5bc6\u65b9\u6848\u4e5f\u975e\u5e38\u7b80\u5355\uff0c\u7528\u6237\u540d+\u56fa\u5b9a\u5b57\u4e32\uff0cAES \u52a0\u5bc6\uff0c\u9644\u52a0\u6807\u5fd7 ENC \u540e\u50a8\u5b58\uff0c\u800c\u63d0\u53d6\u5219\u53cd\u4e4b"}),"\n",(0,i.jsx)(e.p,{children:"\u800c\u5b58\u6863\u65b9\u9762\uff0c\u6bcf\u4e2a\u7528\u6237\u88ab\u5206\u914d\u4e86\u4e09\u4e2a\u5b58\u6863\uff0c\u50a8\u5b58\u4e86\u5730\u56fe\u7684\u8bb0\u5f55\u3001\u6e38\u73a9\u60c5\u51b5\u7b49\uff0c\u5982\u679c\u89e3\u6790\u9519\u8bef\u4f1a\u5728\u7528\u6237\u767b\u5f55\u65f6\u629b\u51fa"}),"\n",(0,i.jsx)(e.h2,{id:"\u4f3c\u4e4e\u4e0d\u7b97\u5f88\u96be\u7684\u903b\u8f91\u5de5\u7a0b",children:"\u4f3c\u4e4e\u4e0d\u7b97\u5f88\u96be\u7684\u903b\u8f91\u5de5\u7a0b"}),"\n",(0,i.jsxs)(e.p,{children:["\u8fd9\u91cc\u8981\u611f\u8c22 ",(0,i.jsx)(e.a,{href:"https://github.com/StiCK-bot",children:"StiCK-bot"})," \u5b8c\u6210\u4e86\u63a8\u7bb1\u5b50\u7684",(0,i.jsx)(e.strong,{children:"\u521d\u4ee3\u903b\u8f91"}),"\uff0c\u6211\u5728\u5176\u57fa\u7840\u4e0a\u505a\u4e86\u4e00\u4e9b\u6539\u8fdb\u3002\u5177\u4f53\u6765\u8bf4..."]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u901a\u8fc7\u9012\u5f52\u5224\u65ad\u7bb1\u5b50\u662f\u5426\u53ef\u4ee5\u88ab\u63a8\u52a8\uff08\u672c\u4f5c\u8bbe\u8ba1\u4e3a\u53ef\u8fde\u63a8\u591a\u4e2a\u7bb1\u5b50\uff09"}),"\n",(0,i.jsx)(e.li,{children:"\u8ba1\u7b97\u6bcf\u4e2a\u7269\u4f53\u7684\u4f4d\u79fb\uff0c\u5c06\u4f4d\u79fb\u4fe1\u606f\u805a\u5408\u4e3a\u547d\u4ee4\uff0c\u53d1\u9001\u5230\u524d\u7aef"}),"\n",(0,i.jsx)(e.li,{children:"\u524d\u7aef\u89e3\u6790\u4f4d\u79fb\u547d\u4ee4\uff0c\u8f6c\u5316\u6210\u52a8\u753b\u663e\u793a"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u8fd9\u6837\u5c31\u80fd\u64cd\u63a7\u4eba\u7269\u8fdb\u884c\u6e38\u620f\u4e86"}),"\n",(0,i.jsx)(e.p,{children:"\u63a5\u4e0b\u6765\u662f\u5404\u79cd\u9644\u52a0\u306e\u903b\u8f91"}),"\n",(0,i.jsx)(e.h3,{id:"\u6b7b\u9501\u68c0\u6d4b",children:"\u6b7b\u9501\u68c0\u6d4b"}),"\n",(0,i.jsx)(e.p,{children:"\u9879\u76ee bonus \u8981\u6c42\u5bf9\u6e38\u620f\u8fdb\u884c\u6b7b\u9501\u68c0\u6d4b\uff0c\u53d1\u73b0\u6b7b\u9501\u5219\u5224\u5b9a\u6e38\u620f\u5931\u8d25\uff0c\u7ed9\u51fa\u63d0\u793a\u6216\u91cd\u7f6e"}),"\n",(0,i.jsx)(e.p,{children:"\u7136\u800c\u6b7b\u9501\u662f\u4e2a\u5f88\u590d\u6742\u7684\u95ee\u9898\uff08\uff09\u5177\u4f53\u53ef\u4ee5\u770b\u770b\u6211\u7684\u51e0\u7bc7 blog"}),"\n",(0,i.jsxs)(e.p,{children:["\ud83d\udc49 ",(0,i.jsx)(e.a,{href:"/blog/2024/12/04/Sokoban-Corner-Deadlock-Test",children:"\u63a8\u7bb1\u5b50\u6b7b\u9501\u68c0\u6d4b"})]}),"\n",(0,i.jsx)(e.h3,{id:"ai-\u6c42\u89e3\u5668",children:"AI \u6c42\u89e3\u5668"}),"\n",(0,i.jsx)(e.p,{children:"\u4e25\u683c\u6765\u8bf4\u4e0d\u80fd\u7b97 AI\uff0c\u56e0\u4e3a\u6c42\u89e3\u5668\u4f7f\u7528\u7684\u90fd\u662f\u4f20\u7edf\u7b97\u6cd5 (IDA*) \u7b49\uff0c\u5e76\u4e14\u7531\u4e8e\u6211\u7a00\u70c2\u7684\u7b97\u6cd5\u80fd\u529b\uff08\u96fe\uff09\u5bfc\u81f4\u5b83\u8fd0\u884c\u8d77\u6765\u8001\u725b\u62d6\u8f66"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.del,{children:"\u5509\uff0c\u80fd\u7528\u5c31\u884c\u5427"})}),"\n",(0,i.jsxs)(e.p,{children:["\u53e6\u5916\u6709\u4e00\u4e9b\u5173\u4e8e ",(0,i.jsx)(e.code,{children:"IDA*"})," \u7b97\u6cd5\u7684\u6539\u8fdb\u601d\u8def\uff0c\u4e0d\u8fc7\uff0c",(0,i.jsx)(e.strong,{children:"\u8fd8\u6ca1\u6709\u8fdb\u884c\u5b9e\u9a8c"}),"\uff0c\u4e14\u5f53\u4e00\u4e2a\u7b11\u8c08"]}),"\n",(0,i.jsxs)(e.p,{children:["\ud83d\udc49 ",(0,i.jsx)(e.a,{href:"/blog/2024/12/07/IDAStar-New-Algo-Thinking",children:"IDA* \u6539\u8fdb\u968f\u60f3"})]}),"\n",(0,i.jsx)(e.h2,{id:"\u8de8\u8bed\u8a00\u5f00\u53d1",children:"\u8de8\u8bed\u8a00\u5f00\u53d1"}),"\n",(0,i.jsx)(e.p,{children:"\u8fd9\u91cc\u5c5e\u5b9e\u662f\u4e3a\u4e86\u4e00\u7897\u918b\u5305\u4e86\u4e00\u684c\u997a\uff0c\u672c\u610f\u5927\u6982\u5c31\u662f\u5728 Java \u4e2d\u8c03\u7528\u7cfb\u7edf API \u8c03\u7528\u6587\u4ef6\u9009\u62e9\u6846..."}),"\n",(0,i.jsx)(e.p,{children:"\u9879\u76ee\u9009\u62e9\u4e86 JNI \u4f5c\u4e3a Java \u7684\u5916\u90e8\u4ea4\u4e92\u63a5\u53e3\uff0c\u4e0e C++ \u7f16\u8bd1\u7684 dll \u8fdb\u884c\u4ea4\u4e92"}),"\n",(0,i.jsxs)(e.p,{children:["C++ \u90e8\u5206\u7684\u4ee3\u7801\u4e2d\uff0c\u901a\u8fc7\u8c03\u7528 ",(0,i.jsx)(e.code,{children:"GetSaveFileName"})," \u7cfb\u7edf API \u6253\u5f00\u6587\u4ef6\u5bf9\u8bdd\u6846\uff0c\u83b7\u53d6\u5230\u4fdd\u5b58\u6587\u4ef6\u8def\u5f84\u540e\u8fd4\u56de Java \u4e2d"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-cpp",children:"JNIEXPORT jstring JNICALL Java_com_sokoban_utils_WindowsFileChooser_saveFileChooser(JNIEnv* env, jclass cls, jstring filterString) {\r\n    OPENFILENAMEW ofn;\r\n    wchar_t szFile[260] = L\"NewMap.map\";\r\n\r\n    // Initialize OPENFILENAMEW structure\r\n    ZeroMemory(&ofn, sizeof(ofn));\r\n    ofn.lStructSize = sizeof(ofn);\r\n    ofn.lpstrFile = szFile;\r\n    ofn.lpstrFile[0] = L'\\0';\r\n    ofn.nMaxFile = sizeof(szFile) / sizeof(wchar_t);\r\n\r\n    // \u4ece Java \u83b7\u53d6 UTF-8 \u7f16\u7801\u7684\u8fc7\u6ee4\u5b57\u7b26\u4e32\r\n    const char* filterCStr = env->GetStringUTFChars(filterString, nullptr);\r\n\r\n    // \u8f6c\u6362\u4e3a\u5bbd\u5b57\u7b26\r\n    size_t filterLen = strlen(filterCStr);\r\n    size_t wideCharLen = MultiByteToWideChar(CP_UTF8, 0, filterCStr, -1, NULL, 0);\r\n    std::wstring filterWStr(wideCharLen, L'\\0');\r\n    MultiByteToWideChar(CP_UTF8, 0, filterCStr, -1, &filterWStr[0], wideCharLen);\r\n\r\n    // \u66ff\u6362\u5206\u9694\u7b26 '|' \u4e3a null \u5b57\u7b26 '\\0'\r\n    for (auto& ch : filterWStr) {\r\n        if (ch == L'|') {\r\n            ch = L'\\0';\r\n        }\r\n    }\r\n\r\n    // \u91ca\u653e Java \u5b57\u7b26\u4e32\u8d44\u6e90\r\n    env->ReleaseStringUTFChars(filterString, filterCStr);\r\n\r\n    // \u8bbe\u7f6e\u8fc7\u6ee4\u5668\r\n    ofn.lpstrFilter = filterWStr.c_str();\r\n    ofn.nFilterIndex = 1;\r\n    ofn.lpstrFileTitle = NULL;\r\n    ofn.nMaxFileTitle = 0;\r\n    ofn.lpstrInitialDir = NULL;\r\n\r\n    // \u8bbe\u7f6e\u4fdd\u5b58\u5bf9\u8bdd\u6846\u7279\u5b9a\u7684\u6807\u5fd7\r\n    ofn.Flags = OFN_PATHMUSTEXIST | OFN_OVERWRITEPROMPT;\r\n\r\n    // Display the Save dialog box\r\n    if (GetSaveFileName(&ofn) == TRUE) {\r\n        // \u6587\u4ef6\u5df2\u9009\u62e9\uff0c\u8fd4\u56de\u6587\u4ef6\u8def\u5f84\r\n        return env->NewString((const jchar*)ofn.lpstrFile, wcslen(ofn.lpstrFile));\r\n    } else {\r\n        // \u6ca1\u6709\u9009\u62e9\u6587\u4ef6\uff0c\u8fd4\u56de null\r\n        return NULL;\r\n    }\r\n}\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u5927\u6982\u5c31\u8fd9\u6837..."}),"\n",(0,i.jsx)(e.p,{children:"\ud83d\udea7 \u65bd\u5de5\u4e2d"})]})}function j(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(x,{...n})}):x(n)}},7986:(n,e,r)=>{r.d(e,{A:()=>s});const s=r.p+"assets/images/assets-get-3e0e3ae569009a13133611f19cde7160.png"},3624:(n,e,r)=>{r.d(e,{A:()=>s});const s=r.p+"assets/images/check-box-ps-e783b344124d78b02d08dfadfca12e17.png"},4806:(n,e,r)=>{r.d(e,{A:()=>s});const s=r.p+"assets/images/check-box-spine-3ffc2980361117064e9df00fff7d9b77.png"},8453:(n,e,r)=>{r.d(e,{R:()=>d,x:()=>c});var s=r(6540);const i={},l=s.createContext(i);function d(n){const e=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:d(n.components),s.createElement(l.Provider,{value:e},n.children)}}}]);