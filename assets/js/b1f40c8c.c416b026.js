"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7196],{1247:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>l});var s=t(5893),d=t(1151);const c={sidebar_label:"embedded_ipython_code_executor",title:"coding.embedded_ipython_code_executor"},o=void 0,r={id:"reference/coding/embedded_ipython_code_executor",title:"coding.embedded_ipython_code_executor",description:"IPythonCodeResult",source:"@site/docs/reference/coding/embedded_ipython_code_executor.md",sourceDirName:"reference/coding",slug:"/reference/coding/embedded_ipython_code_executor",permalink:"/autogen/docs/reference/coding/embedded_ipython_code_executor",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/autogen/edit/main/website/docs/reference/coding/embedded_ipython_code_executor.md",tags:[],version:"current",frontMatter:{sidebar_label:"embedded_ipython_code_executor",title:"coding.embedded_ipython_code_executor"},sidebar:"referenceSideBar",previous:{title:"base",permalink:"/autogen/docs/reference/coding/base"},next:{title:"factory",permalink:"/autogen/docs/reference/coding/factory"}},i={},l=[{value:"IPythonCodeResult",id:"ipythoncoderesult",level:2},{value:"EmbeddedIPythonCodeExecutor",id:"embeddedipythoncodeexecutor",level:2},{value:"UserCapability",id:"usercapability",level:2},{value:"add_to_agent",id:"add_to_agent",level:3},{value:"user_capability",id:"user_capability",level:3},{value:"code_extractor",id:"code_extractor",level:3},{value:"execute_code_blocks",id:"execute_code_blocks",level:3},{value:"restart",id:"restart",level:3}];function a(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"ipythoncoderesult",children:"IPythonCodeResult"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class IPythonCodeResult(CodeResult)\n"})}),"\n",(0,s.jsx)(n.p,{children:"(Experimental) A code result class for IPython code executor."}),"\n",(0,s.jsx)(n.h2,{id:"embeddedipythoncodeexecutor",children:"EmbeddedIPythonCodeExecutor"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class EmbeddedIPythonCodeExecutor(BaseModel)\n"})}),"\n",(0,s.jsx)(n.p,{children:"(Experimental) A code executor class that executes code statefully using an embedded\nIPython kernel managed by this class."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"This will execute LLM generated code on the local machine."})}),"\n",(0,s.jsxs)(n.p,{children:["Each execution is stateful and can access variables created from previous\nexecutions in the same session. The kernel must be installed before using\nthis class. The kernel can be installed using the following command:\n",(0,s.jsx)(n.code,{children:"python -m ipykernel install --user --name {kernel_name}"}),"\nwhere ",(0,s.jsx)(n.code,{children:"kernel_name"})," is the name of the kernel to install."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"timeout"})," ",(0,s.jsx)(n.em,{children:"int"})," - The timeout for code execution, by default 60."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"kernel_name"})," ",(0,s.jsx)(n.em,{children:"str"}),' - The kernel name to use. Make sure it is installed.\nBy default, it is "python3".']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"output_dir"})," ",(0,s.jsx)(n.em,{children:"str"}),' - The directory to save output files, by default ".".']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"system_message_update"})," ",(0,s.jsx)(n.em,{children:"str"})," - The system message update to add to the\nagent that produces code. By default it is\n",(0,s.jsx)(n.code,{children:"EmbeddedIPythonCodeExecutor.DEFAULT_SYSTEM_MESSAGE_UPDATE"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"usercapability",children:"UserCapability"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class UserCapability()\n"})}),"\n",(0,s.jsxs)(n.p,{children:["(Experimental) An AgentCapability class that gives agent ability use a stateful\nIPython code executor. This capability can be added to an agent using\nthe ",(0,s.jsx)(n.code,{children:"add_to_agent"})," method which append a system message update to the\nagent's system message."]}),"\n",(0,s.jsx)(n.h3,{id:"add_to_agent",children:"add_to_agent"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def add_to_agent(agent: LLMAgent) -> None\n"})}),"\n",(0,s.jsx)(n.p,{children:"Add this capability to an agent by appending a system message\nupdate to the agent's system message."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Currently we do not check for conflicts with existing content in\nthe agent's system message."})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"agent"})," ",(0,s.jsx)(n.em,{children:"LLMAgent"})," - The agent to add the capability to."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"user_capability",children:"user_capability"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'@property\ndef user_capability() -> "EmbeddedIPythonCodeExecutor.UserCapability"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["(Experimental) Export a user capability for this executor that can be added to\nan agent using the ",(0,s.jsx)(n.code,{children:"add_to_agent"})," method."]}),"\n",(0,s.jsx)(n.h3,{id:"code_extractor",children:"code_extractor"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"@property\ndef code_extractor() -> CodeExtractor\n"})}),"\n",(0,s.jsx)(n.p,{children:"(Experimental) Export a code extractor that can be used by an agent."}),"\n",(0,s.jsx)(n.h3,{id:"execute_code_blocks",children:"execute_code_blocks"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def execute_code_blocks(code_blocks: List[CodeBlock]) -> IPythonCodeResult\n"})}),"\n",(0,s.jsx)(n.p,{children:"(Experimental) Execute a list of code blocks and return the result."}),"\n",(0,s.jsxs)(n.p,{children:["This method executes a list of code blocks as cells in an IPython kernel\nmanaged by this class.\nSee: ",(0,s.jsx)(n.a,{href:"https://jupyter-client.readthedocs.io/en/stable/messaging.html",children:"https://jupyter-client.readthedocs.io/en/stable/messaging.html"}),"\nfor the message protocol."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"code_blocks"})," ",(0,s.jsx)(n.em,{children:"List[CodeBlock]"})," - A list of code blocks to execute."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Returns"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"IPythonCodeResult"})," - The result of the code execution."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"restart",children:"restart"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"def restart() -> None\n"})}),"\n",(0,s.jsx)(n.p,{children:"(Experimental) Restart a new session."})]})}function h(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>o});var s=t(7294);const d={},c=s.createContext(d);function o(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);