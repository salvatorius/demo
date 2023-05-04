"use strict";(self.webpackChunkcafenet=self.webpackChunkcafenet||[]).push([[343],{1201:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>f});var a=r(6687);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function t(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?t(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,a,o=function(e,n){if(null==e)return{};var r,a,o={},t=Object.keys(e);for(a=0;a<t.length;a++)r=t[a],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(a=0;a<t.length;a++)r=t[a],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var r=e.components,o=e.mdxType,t=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||t;return r?a.createElement(f,i(i({ref:n},c),{},{components:r})):a.createElement(f,i({ref:n},c))}));function f(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var t=r.length,i=new Array(t);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<t;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},289:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>l,toc:()=>p});var a=r(8792),o=(r(6687),r(1201));const t={},i="Ejemplo: Pares",l={unversionedId:"python-generators/ejemplo-basico",id:"python-generators/ejemplo-basico",title:"Ejemplo: Pares",description:"Ahora pasemos a mirar c\xf3mo deber\xeda lucir (t\xedpicamente) el cuerpo de esa funci\xf3n generador con la instrucci\xf3n yield, con un ejemplo muy b\xe1sico, pero completo y funcional:",source:"@site/docs/python-generators/3-ejemplo-basico.md",sourceDirName:"python-generators",slug:"/python-generators/ejemplo-basico",permalink:"/demo/docs/python-generators/ejemplo-basico",draft:!1,editUrl:"https://github.com/salvatorius/demo/tree/main/packages/create-docusaurus/templates/shared/docs/python-generators/3-ejemplo-basico.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Yield",permalink:"/demo/docs/python-generators/yield"},next:{title:"Generadores Finitos",permalink:"/demo/docs/python-generators/generador-finito"}},s={},p=[{value:"Generando de los primeros enteros pares positivos",id:"generando-de-los-primeros-enteros-pares-positivos",level:2}],c={toc:p},d="wrapper";function u(e){let{components:n,...r}=e;return(0,o.kt)(d,(0,a.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ejemplo-pares"},"Ejemplo: Pares"),(0,o.kt)("p",null,"Ahora pasemos a mirar c\xf3mo deber\xeda lucir (t\xedpicamente) el cuerpo de esa funci\xf3n generador con la instrucci\xf3n ",(0,o.kt)("inlineCode",{parentName:"p"},"yield"),", con un ejemplo muy b\xe1sico, pero completo y funcional:"),(0,o.kt)("h2",{id:"generando-de-los-primeros-enteros-pares-positivos"},"Generando de los primeros enteros pares positivos"),(0,o.kt)("p",null,"En este ejemplo vamos a crear un generador que devuelva todos los n\xfameros pares entre el 2 y el 20 (ambos inclusive). Para ello, nos valdremos del uso del simp\xe1tico d\xfao ",(0,o.kt)("inlineCode",{parentName:"p"},"for")," y ",(0,o.kt)("inlineCode",{parentName:"p"},"range"),' para ir avanzando un contador, y la instrucci\xf3n yield para devolver cada n\xfamero par, a medida que los vamos "hallando", de forma incremental:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def generador_de_pares():\n    for i in range(10):\n        # con i: 0 -> 9\n        yield (i+1)*2\n\npares = generador_de_pares()\n\nfor par in pares:\n    print(f'{par} es par')\n")),(0,o.kt)("p",null,"En este ejemplo, la funci\xf3n ",(0,o.kt)("inlineCode",{parentName:"p"},"generador_de_pares")," empieza su ejecuci\xf3n con ese bucle ",(0,o.kt)("inlineCode",{parentName:"p"},"for")," con el ",(0,o.kt)("inlineCode",{parentName:"p"},"range(10)")," para generar (e iterar por) los n\xfameros del 0 al 9, y utiliza la instrucci\xf3n yield para devolver cada n\xfamero par (calculado a partir de ese contador i) de forma incremental. Sin embargo, a pesar de tratarse de un for (que se supone deber\xeda seguir iterando varias veces hasta que se cumpla su condici\xf3n de parada) la funci\xf3n generador se detendr\xe1 en la instrucci\xf3n yield (cada vez que entregue un valor), y se reanuda la ejecuci\xf3n desde ese punto la siguiente vez que se llama al generador. En este caso, al retomar el control, se contin\xfaa a la siguiente iteraci\xf3n del for (que se hab\xeda pausado), es decir, al siguiente valor de ",(0,o.kt)("inlineCode",{parentName:"p"},"i"),"."),(0,o.kt)("p",null,"Una vez definida la funci\xf3n ",(0,o.kt)("inlineCode",{parentName:"p"},"generador_de_pares"),", creamos un objeto (o instancia de) ",(0,o.kt)("inlineCode",{parentName:"p"},"generator")," (en el ejemplo: ser\xeda ese ",(0,o.kt)("inlineCode",{parentName:"p"},"pares"),") llamando a la funci\xf3n generador."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Una vez m\xe1s: si intentamos comprobar el tipo de datos de ese objeto ",(0,o.kt)("inlineCode",{parentName:"p"},"pares"),", no lo veremos como una lista o secuencia de valores, sino como un ",(0,o.kt)("inlineCode",{parentName:"p"},"generator")," directamente")),(0,o.kt)("p",null,"Finalmente, utilizamos un bucle ",(0,o.kt)("inlineCode",{parentName:"p"},"for"),' (nuevamente, pero esta vez en la llamada "externa" a la funci\xf3n) para iterar sobre el generador obtenido: ',(0,o.kt)("inlineCode",{parentName:"p"},"pares")," (el objeto, no la funci\xf3n original), y en cada iteraci\xf3n, se imprime el valor generado, consiguiendo as\xed la secuencia esperada."))}u.isMDXComponent=!0}}]);