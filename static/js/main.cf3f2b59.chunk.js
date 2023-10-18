(this["webpackJsonpreact-tailwindcss-portfolio"]=this["webpackJsonpreact-tailwindcss-portfolio"]||[]).push([[0],{21:function(e,t,a){"use strict";var r=a(1);t.a=function(e){var t=e.title;return Object(r.jsx)("button",{children:t})}},26:function(e,t,a){"use strict";var r=a(7),s=a(2);t.a=function(){var e=Object(s.useState)(localStorage.theme),t=Object(r.a)(e,2),a=t[0],n=t[1],i="dark"===a?"light":"dark";return Object(s.useEffect)((function(){var e=window.document.documentElement;e.classList.remove(i),e.classList.add(a),localStorage.setItem("theme",a)}),[a,i]),[i,n]}},27:function(e,t,a){"use strict";var r=a(7),s=a(2),n=a(28),i=a(30),o=a(51),c=(a(39),a(1));t.a=function(){var e=Object(s.useState)(null),t=Object(r.a)(e,2);t[0],t[1];return Object(c.jsx)(o.a.section,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},children:Object(c.jsxs)("div",{className:"text-center",children:[Object(c.jsx)("p",{className:"mt-8 font-general-medium text-2xl sm:text-4xl mb-8 text-ternary-dark dark:text-ternary-light",children:"Articles"}),Object(c.jsx)("div",{className:"flex items-center justify-center min-h-screen",children:Object(c.jsx)("div",{className:"grid grid-rows-1 md:grid-rows-2 lg:grid-rows-3 gap-4",children:i.a.reverse().map((function(e,t){return Object(c.jsx)(n.a,{title:e.title,imageUrl:e.imageUrl,date:e.date,content:e.content,imageUrl2:e.imageUrl2},t)}))})})]})})}},28:function(e,t,a){"use strict";var r=a(7),s=a(2),n=a(1);t.a=function(e){var t=e.title,a=e.imageUrl,i=e.date,o=e.content,c=e.imageUrl2,l=Object(s.useState)(!1),d=Object(r.a)(l,2),m=d[0],h=d[1],b=s.Children.toArray(o.props.children),x=m?b:b[0].props.children.slice(0,200);return Object(n.jsxs)("div",{className:"bg-stone-50 dark:bg-gray-900 rounded-lg shadow-lg p-4 sm:p-6 mb-4 sm:mb-8 text-ternary-dark dark:text-ternary-light lg:w-98 lg:h-48 sm:max-w-md",children:[Object(n.jsx)("h2",{className:"mb-1 font-general-medium text-4xl",children:t}),Object(n.jsx)("div",{className:"mb-4",children:Object(n.jsx)("img",{src:a,alt:t,className:"w-97 h-48 object-cover rounded-md mx-auto"})}),Object(n.jsx)("p",{className:"font-general-medium text-xl text-gray-600 px-6 pb-2",children:i}),Object(n.jsxs)("div",{className:"font-general-regular prose max-w-none px-6",children:[x,b[0].props.children.length>200&&Object(n.jsx)("button",{className:"inline-block text-blue-500 hover:underline focus:outline-none",onClick:function(){h(!m)},children:!m&&"see more..."}),Object(n.jsx)("img",{src:m&&c,className:"w-97 h-48 object-cover rounded-md mx-auto"})]})]})}},30:function(e,t,a){"use strict";a.d(t,"a",(function(){return w}));var r,s=a.p+"static/media/InheritanceCodeExample.fcd409ed.png",n=a.p+"static/media/AbstractionCodeExample.d89506d4.png",i=a.p+"static/media/EncapsulationCodeExample.5a638d7c.png",o=a.p+"static/media/PolymorphismCodeExample.9b032883.png",c=a.p+"static/media/sql-basics-cheat-sheet-page-1.6fc36a15.png",l=a.p+"static/media/sql-basics-cheat-sheet-page-2.98688f4a.png",d=a.p+"static/media/OOPArticleImage.862f01e6.png",m=a.p+"static/media/SQLArticleImage.794ead82.jpg",h=a.p+"static/media/PropsReactJSArticle.01076612.png",b=a.p+"static/media/ParentComponentExample.a0845111.png",x=a.p+"static/media/ParentComponentExample2.49853fdc.png",p=a.p+"static/media/ParentComponentExample3.d3db0590.png",j=a.p+"static/media/ChildComponentExample.c8235478.png",u=a.p+"static/media/ChildComponentExample2.3e3e431e.png",g=a.p+"static/media/ChildComponentExample3.7f9a2375.png",f=a.p+"static/media/ChildComponentExample4.b637ed60.png",y=a(1),O={url:"https://www.youtube.com/watch?v=-OO1FqnjVuQ&ab_channel=TheMacLife"};fetch("https://getlinkpreview.onrender.com/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(O)}).then((function(e){return e.json()})).then((function(e){var t;r=e.image,t=r,console.log("Image URL:",t),console.log(r)})).catch((function(e){console.error("Error:",e)})),console.log("storedImageURL is: ",r);var w=[{title:"Principles of Object Oriented Programming",date:"October 5th, 2023",content:Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("p",{children:"There are four main principles, or pillars, of object-oriented programming: Inheritance, Abstraction, Encapsulation, and Polymorphism. This article is a quick guide that goes over these principles concisely."}),Object(y.jsx)("h2",{className:"mt-4 mb-4 font-general-medium text-2xl",children:"Inheritance:"}),Object(y.jsx)("p",{children:"In Object-Oriented Programming languages, we can inherit methods and attributes from one class to another, creating a relationship between the original class (parent or superclass) and the class that inherits from it (child or subclass)."}),Object(y.jsx)("img",{src:s,alt:"Inheritance Image",className:"mt-8 mb-8 flex justify-center items-center w-99 h-48 object-cover rounded-md mx-auto"}),Object(y.jsx)("p",{children:"The example above uses Java to showcase how Inheritance works. It allows the subclass to use the parent class's attributes and methods without explicitly defining them in its own class. Inheritance promotes code reusability and enables the subclass to define its separate methods, which is an extension to the parent class."}),Object(y.jsx)("h2",{className:"mb-4 mt-4 font-general-medium text-2xl",children:"Abstraction:"}),Object(y.jsx)("p",{children:"Abstraction is used to hide internal details from a user and present only the essential information. We can understand abstraction by using everyday machines or equipment as examples. For instance, when using a corded lawn mower, the user doesn't need to know the machine's internal workings, such as motors, wires, and metals. Instead, they follow a set of simple steps unrelated to the machine's internals. In OOP, abstraction is achieved through abstract classes and interfaces."}),Object(y.jsx)("img",{src:n,alt:"Abstraction Image",className:"mt-8 mb-8 flex justify-center items-center w-99 h-48 object-cover rounded-md mx-auto"}),Object(y.jsxs)("p",{className:"mb-8",children:["By inheriting an abstract class, as shown in the example, a class like ",Object(y.jsx)("em",{children:"somePhone "})," inherits the ",Object(y.jsx)("em",{children:"Call "})," method without needing to know its internal operations. It must provide an implementation for the ",Object(y.jsx)("em",{children:"Dial "})," method since it's an abstract method, a requirement for classes inheriting abstract classes."]}),Object(y.jsx)("p",{children:"It is also worth mentioning an abstract class can have its own set of fields/attributes that can be accessed by the subclass."}),Object(y.jsx)("h2",{className:"mb-4 mt-4 font-general-medium text-2xl",children:"Encapsulation:"}),Object(y.jsx)("p",{children:"The general idea behind this principle is straightforward. For example, you may have an attribute that is not visible from the outside of an object. You encapsulate or bundle it with methods that provide read or write access. Encapsulation allows you to conceal specific information and regulate access to the object's internal state. In the realm of object-oriented programming, we refer to this functionality as getter and setter methods. As the names suggest, a getter method retrieves an attribute, and a setter method modifies it."}),Object(y.jsx)("img",{src:i,alt:"Encapsulation Image",className:"mt-8 mb-8 flex justify-center items-center w-99 h-48 object-cover rounded-md mx-auto"}),Object(y.jsxs)("p",{children:["  The example provided demonstrates that class attributes like ",Object(y.jsx)("em",{children:"selection "})," and ",Object(y.jsx)("em",{children:"quantity "})," cannot be accessed directly but require the use of ",Object(y.jsx)("em",{children:"getSelection "}),", ",Object(y.jsx)("em",{children:"getQuantity "}),", and ",Object(y.jsx)("em",{children:"setQuantity "})," methods. This technique enhances security by limiting direct access to object attributes. "]}),Object(y.jsx)("h2",{className:"mb-4 mt-4 font-general-medium text-2xl",children:"Polymorphism:"}),Object(y.jsx)("p",{children:'Polymorphism means "many forms" and in layman terms, it refers to classes that are related to one another by inheritance. It allows different classes that inherit from a common parent to perform different tasks with methods of the same name. Consider the class below:'}),Object(y.jsx)("img",{src:o,alt:"Polymorphism Image",className:"mt-8 mb-8 flex justify-center items-center w-99 h-48 object-cover rounded-md mx-auto"}),Object(y.jsxs)("p",{children:["The ",Object(y.jsx)("em",{children:"Person"})," class has a method called ",Object(y.jsx)("em",{children:"teach"}),", and the ",Object(y.jsx)("em",{children:"Teacher"})," class has an identical method. Polymorphism utilzies the inheritance relationship to perform different tasks. Each class that inherits ",Object(y.jsx)("em",{children:"Person"})," can have its own implementation of ",Object(y.jsx)("em",{children:"teach"})," method. For instance, we can also add a ",Object(y.jsx)("em",{children:"Professor"})," class that has its own ",Object(y.jsx)("em",{children:"teach"})," method with added parameters."]}),Object(y.jsxs)("p",{className:"mb-8",children:["Polymorphism is incredibly useful when there's different types of objects, and we write classes that can work with all those different types since they all abide by the same API. On top of that, it comes in handy whenever we we want to add a new ",Object(y.jsx)("em",{children:"Person"})," to the application without changing any of the existing logic in code."]}),Object(y.jsx)("p",{children:"In conclusion, Object-Oriented Programming Principles are powerful tools for developing efficient, scalable, and maintainable software solutions. Embracing these principles empowers developers to write code that withstands the test of time and is easy to manage and modify in the long run."})]}),imageUrl:d},{title:"SQL Basics Cheat Sheet",date:"October 10, 2023",content:Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("p",{children:" Recently, I stumbled across a SQL cheat sheet that it worth including in an article. As developers, we often have to craft queries to retrieve data and conduct some analysis. While complex data analysis may require the expertise of a seasoned data analyst, the SQL cheat sheet allow developers to perform simple yet essential data analysis on tables in a database."}),Object(y.jsx)("img",{src:c,alt:"Centered Image",className:"mt-8 mb-8 flex justify-center items-center w-99 h-48 object-cover rounded-md mx-auto"}),Object(y.jsx)("img",{src:l,alt:"Centered Image",className:"mt-8 mb-8 flex justify-center items-center w-99 h-48 object-cover rounded-md mx-auto"}),Object(y.jsx)("p",{children:"The cheat sheet covers how to query from a single or multiple tables, filter output with null or non-null values, utilize wildcards, inequality signs, and specify ranges of values. It also demonstrates how to join multiple tables using the infamous JOIN operator. Additionally, it illustrates how to harness the power of AGGREGATE functions (AVG, COUNT, MAX, MIN, SUM) and GROUP output by a specific column. Furthermore, it shows how to use SET OPERATIONS such as UNION, INTERSECT, and EXCEPT to combine results from two or more queries. "}),Object(y.jsxs)("p",{className:"mb-8",children:["If you'd like to access the cheat sheet in text form, you can access it ",Object(y.jsx)("a",{href:"https://learnsql.com/blog/sql-basics-cheat-sheet/",className:"text-ternary-dark dark:text-ternary-light hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500",target:"_blank",children:"here:"})]}),Object(y.jsx)("p",{children:"All in all, this cheat sheet is a valuable tool that concisely covers the fundamentals of SQL. It also serves as an excellent refresher for those already familiar with SQL and sets them up to learn more complex SQL commands. "})]}),imageUrl:m},{title:"Props in React JS",date:"October 12, 2023",content:Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("p",{children:'React JS is arguably the most popular JavaScript library in recent years. Many real-world applications such as Amazon, Netflix, and Facebook use React to create a seamless UI/UX experience for their users. In this article, I will explain the purpose of props, how to use them, and why they are essential for mastering React. Props, short for "properties," play a crucial role in passing data into React components, enabling these components to access specific, customized values provided through the input (props). Let\'s delve into a practical example to better understand how props work.'}),Object(y.jsx)("img",{src:b,alt:"Parent Component Example 1",className:"mt-8 mb-8 flex justify-center items-center w-96 h-48 object-cover rounded-md mx-auto"}),Object(y.jsxs)("p",{children:[" In the code snippet, we have a parent component called ",Object(y.jsx)("em",{children:"App"}),". It declares an ",Object(y.jsx)("em",{children:"h1"}),' with the text "Songs" and renders a child component called ',Object(y.jsx)("em",{children:"Song "}),"within a div. In React, components are ALWAYS passed from parent to child, never the other way around. Now, let's take a closer look at the child component to see how props are utilized:"]}),Object(y.jsx)("img",{src:j,alt:"Child Component Example",className:"mt-8 mb-8 flex justify-center items-center w-99 h-48 object-cover rounded-md mx-auto"}),Object(y.jsxs)("p",{children:["The child component currently has an image, name, description, and the artist's name. If we render the ",Object(y.jsx)("em",{children:"Song"})," component multiple times, the result would be identical each time, which is not quite useful to us."]}),Object(y.jsx)("img",{src:x,alt:"Parent Component Example 2",className:"mt-8 mb-8 flex justify-center items-center w-96 h-48 object-cover rounded-md mx-auto"}),Object(y.jsx)("p",{children:"The Song component will produce the same output every time it's rendered. But what if an application wants to use the Song component with dynamic and flexible content, where the image, description, name, and artist fields can alter? This is where props come to the rescue! By passing customized values from a parent component to a child component, we can render the Song component in distinct ways, obtaining a unique output each time we provide different values to the component."}),Object(y.jsx)("img",{src:p,alt:"Parent Component Example 2",className:"mt-8 mb-8 flex justify-center items-center w-96 h-48 object-cover rounded-md mx-auto"}),Object(y.jsx)("img",{src:u,alt:"Child Component Example 2",className:"mt-8 mb-8 flex justify-center items-center w-99 h-48 object-cover rounded-md mx-auto"}),Object(y.jsx)("p",{className:"mb-8",children:"In the App component, we pass unique image, name, description, and artist values to the child component, Song. The child component takes props as a function parameter and uses these values to populate the fields of the Song component. This way, the Song component can display content that is specific to each song."}),Object(y.jsxs)("p",{children:['It\'s important to note that the name "props" can be changed to any identifier you prefer. However, using ',Object(y.jsx)("em",{children:"props"})," as a naming convention is a good practice to easily identify that you are working with props."]}),Object(y.jsxs)("p",{children:["In terms of writing props, there are a couple of ways we can make the code concise in the ",Object(y.jsx)("em",{children:"Song"})," component using the destructuring approach:"]}),Object(y.jsx)("img",{src:g,alt:"Child Component Example 3",className:"mt-8 mb-8 flex justify-center items-center w-99 h-48 object-cover rounded-md mx-auto"}),Object(y.jsx)("img",{src:f,alt:"Child Component Example 4",className:"mt-8 mb-8 flex justify-center items-center w-99 h-48 object-cover rounded-md mx-auto"}),Object(y.jsx)("p",{className:"mb-8",children:"Both of these approaches yield the same output. Destructuring makes the code succinct and readable, however if you prefer the original approach, that is completletly acceptable as well."}),Object(y.jsx)("p",{children:"In summary, we now have a solid understanding of how props work in React JS. By harnessing the power of props, we can create web pages with dynamic data outputs, making our applications more flexible and versatile. "})]}),imageUrl:h}]},31:function(e,t,a){"use strict";a(2);var r=a(24),s=a(51),n=a(1),i=function(e){var t=e.title,a=e.description,i=e.image,o=e.sourceCodeLink;e.demoLink;return Object(n.jsx)(s.a.section,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},children:Object(n.jsx)("div",{className:"bg-stone-50 dark:bg-gray-900 rounded-lg shadow-lg p-6 w-auto h-auto flex flex-col justify-between hover:scale-90 ease-in duration-500",children:Object(n.jsxs)("div",{className:"mb-4 overflow-hidden",children:[Object(n.jsx)("div",{className:"mb-4",children:Object(n.jsx)("img",{src:i,alt:t,className:"font-general-semibold w-full h-48 object-cover rounded-md"})}),Object(n.jsxs)("div",{className:"flex-grow text-ternary-dark dark:text-ternary-light",children:[Object(n.jsx)("h2",{className:"font-general-semibold text-gray-600",children:t}),Object(n.jsx)("p",{className:"font-general-medium text-gray-700 mb-2",children:a})]}),Object(n.jsx)("div",{className:"flex space-x-4 justify-center",children:Object(n.jsxs)("a",{href:o,className:"font-general-medium flex justify-center items-center w-18 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500",target:"_blank",rel:"noopener noreferrer","aria-label":"Source Code",children:[Object(n.jsx)(r.b,{className:"mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"}),Object(n.jsx)("span",{className:"text-sm sm:text-sm font-general-medium duration-100",children:"Code"})]})})]})})})},o=[{title:"Weather App",description:"An app that displays the current temperature of a city along with other relevant information!",image:a.p+"static/media/weatherApp.483e4b77.jpg",sourceCodeLink:"https://github.com/syedatharSG/PersonalProjects/tree/main/Weather-App"},{title:"Tic-Tac-Toe",description:"A collaborative IDE app for interactive Tic-Tac-Toe gaming. Enjoy multiplayer fun together!!",image:a.p+"static/media/TicTacToe.812a0133.png",sourceCodeLink:"https://github.com/syedatharSG/PersonalProjects/tree/main/Tic-Tac-Toe"},{title:"Portfolio Website",description:"Explore the source code of the portfolio you're currently scrolling through!",image:a.p+"static/media/portfolioThumbnail.b948afa7.png",sourceCodeLink:"https://github.com/syedatharSG/personal-portfolio"}];t.a=function(){return Object(n.jsxs)("div",{className:"text-center",children:[Object(n.jsx)("p",{className:"font-general-medium text-2xl sm:text-4xl mb-3 text-ternary-dark dark:text-ternary-light",children:"Projects"}),Object(n.jsx)("div",{className:"flex items-center justify-center min-h-screen",children:Object(n.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:o.map((function(e,t){return Object(n.jsx)(i,{title:e.title,description:e.description,image:e.image,sourceCodeLink:e.sourceCodeLink,demoLink:e.demoLink},t)}))})})]})}},32:function(e,t,a){"use strict";a(2);var r=a(51),s=a(8),n=a.p+"static/media/developerWorking.9faa3362.png",i=a(1),o=function(e){var t=e.skills;return Object(i.jsxs)("div",{className:"bg-gray-100",children:[Object(i.jsx)("h2",{className:"font-general-semibold text-3xl text-ternary-dark dark:text-ternary-light mb-3",children:"Skills"}),Object(i.jsx)("div",{className:"justify-center grid gap-2 grid-cols-1 sm:grid-cols-4",children:t.map((function(e,t){return Object(i.jsx)("span",{className:"font-general-medium border border-indigo-200 dark:border-ternary-dark sm:py-3 bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500 px-3 py-2 rounded-lg shadow-lg my-1 mr-4 text-sm sm:text-sm md:text-base",style:{maxWidth:"100%",overflow:"hidden",display:"inline-block"},children:e},t)}))})]})};t.a=function(){return Object(i.jsxs)(r.a.section,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"mb-21 container mx-auto flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2",children:[Object(i.jsx)("section",{className:"bg-gray-100",children:Object(i.jsxs)("div",{children:[Object(i.jsx)("p",{className:"mt-8 text-center font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light",children:"Work Experience"}),Object(i.jsx)("div",{children:Object(i.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2",children:Object(i.jsxs)("div",{className:"text-left p-4 text-ternary-dark dark:text-ternary-light",children:[Object(i.jsx)("h3",{className:"font-general-semibold text-3xl text-gray-800 mb-3",children:Object(i.jsx)("a",{href:"https://www.shoppinggives.com/",className:"text-ternary-dark dark:text-ternary-light hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500",target:"_blank",rel:"noopener noreferrer",children:"ShoppingGives"})}),Object(i.jsx)("p",{className:"font-general-semibold text-gray-600 ",children:"Position: Software Engineer"}),Object(i.jsx)("p",{className:"font-general-medium text-gray-600",children:"March 2022 - June 2023"}),Object(i.jsx)("p",{className:"mt-4 mb-2 text-left font-general-medium text-gray-700",children:"As a Software Engineer at ShoppingGives, I contributed significantly to the development and enhancement of their product that has donated millions of dollars to charitable causes. I played a key role in the development of several features, ensuring the code adhered to best practices and met business requirements."}),Object(i.jsx)("div",{children:Object(i.jsx)(o,{className:"container mx-auto flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2",skills:["C#",".NET","JavaScript","PostgreSQL","React JS","Node.js","TypeScript","Amazon Web Services (AWS)"]})}),Object(i.jsxs)("a",{download:"Syed Athar Resume.pdf",href:"https://raw.githubusercontent.com/syedatharSG/personal-portfolio/main/public/files/Syed%20Athar%20Resume.pdf",className:"font-general-medium flex justify-center items-center w-36 sm:w-48 mt-6 mb-20 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500","aria-label":"Download Resume",children:[Object(i.jsx)(s.a,{className:"mr-2 sm:mr-3 h-5 w-5 sn:w-6 sm:h-6 duration-100"}),Object(i.jsx)("span",{className:"text-sm sm:text-sm font-general-medium duration-100",children:"More Details"})]})]})})})]})}),Object(i.jsx)(r.a.div,{initial:{opacity:0,y:-180},animate:{opacity:1,y:0},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"w-full sm:w-auto text-right float-right mt-8 sm:mt-0",children:Object(i.jsx)("img",{src:n})})]})}},33:function(e,t,a){"use strict";a(2);var r=a(51),s=a.p+"static/media/avatar.3a96e4ab.png",n=a(1);t.a=function(){return Object(n.jsxs)(r.a.section,{initial:{opacity:0},animate:{opacity:1},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"mb-21 container mx-auto flex flex-col sm:justify-between items-center sm:flex-row mt-12 md:mt-2",children:[Object(n.jsx)(r.a.div,{initial:{opacity:0,y:-180},animate:{opacity:1,y:0},transition:{ease:"easeInOut",duration:.9,delay:.2},className:"w-full sm:w-5/6 md:w-5/6 text-right float-right mt-8 sm:mt-0 mb-4",children:Object(n.jsx)("img",{src:s})}),Object(n.jsx)("section",{className:"bg-gray-100",children:Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{className:"mt-8 ml-7 text-left font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light",children:"About me"}),Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2",children:Object(n.jsxs)("div",{className:"text-left p-4 text-ternary-dark dark:text-ternary-light",children:[Object(n.jsx)("p",{className:"text-left font-general-medium text-gray-700",children:"Hello! I'm Syed Athar, a passionate and enthusiastic software engineer. I enjoy building interactive and user-friendly applications using framworks as React, Node.js, and C#. With a keen eye for design and a strong passion for problem-solving, I strive to create elegant sofware solutions that deliver a seamless user experience."}),Object(n.jsx)("p",{className:"mt-4 text-left font-general-medium text-gray-700",children:"When I'm not coding, I love to immerse myself in books, tech blogs, graphic-design, and physical training."})]})})})]})})]})}},35:function(e,t,a){},38:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);a(35);var r=a(54),s=a(2),n=a(11),i=a(4),o=function(){var e=Object(i.e)().pathname;return Object(s.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},c=a(8),l=a(24),d=a(1);var m=function(){return Object(d.jsx)("div",{className:"font-general-regular flex justify-center items-center text-center",children:Object(d.jsxs)("div",{className:"text-lg text-ternary-dark dark:text-ternary-light",children:["\xa9",Object(d.jsx)("a",{href:"https://syedatharSG.github.io/personal-portfolio",className:"hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 mr-2 duration-500",target:"_blank",rel:"noopener noreferrer",children:"Software Engineer Portfolio \ud83d\udda5\ufe0f"}),Object(d.jsx)("a",{href:"https://syedatharsg.github.io/personal-portfolio/",className:"text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500",target:"_blank",rel:"noopener noreferrer",children:"SYED ATHAR \ud83d\udcbc"})]})})},h=[{id:1,icon:Object(d.jsx)(l.a,{}),url:"https://syedatharsg.github.io/personal-portfolio/"},{id:2,icon:Object(d.jsx)(c.c,{}),url:"https://github.com/syedatharSG"},{id:3,icon:Object(d.jsx)(c.d,{}),url:"https://www.linkedin.com/in/syed-atharr"}],b=function(){return Object(d.jsx)("div",{className:"container mx-auto",children:Object(d.jsxs)("div",{className:"pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark",children:[Object(d.jsxs)("div",{className:"font-general-regular flex flex-col justify-center items-center mb-12 sm:mb-28",children:[Object(d.jsx)("p",{className:"text-3xl sm:text-4xl text-primary-dark dark:text-primary-light mb-5",children:"Follow me"}),Object(d.jsx)("ul",{className:"flex gap-4 sm:gap-8",children:h.map((function(e){return Object(d.jsx)("a",{href:e.url,className:"text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300",target:"_blank",rel:"noopener noreferrer",children:Object(d.jsx)("i",{className:"text-xl sm:text-2xl md:text-3xl",children:e.icon})},e.id)}))})]}),Object(d.jsx)(m,{})]})})},x=a(7),p=a(26),j=a(51),u=a(21),g=function(e){var t=e.onClose;e.onRequest;return Object(d.jsxs)(j.a.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"font-general-medium fixed inset-0 z-30 transition-all duration-500",children:[Object(d.jsx)("div",{className:"bg-filter bg-black bg-opacity-50 fixed inset-0 w-full h-full z-20"}),Object(d.jsx)("main",{className:"flex flex-col items-center justify-center h-full w-full",children:Object(d.jsx)("div",{className:"modal-wrapper flex items-center z-30",children:Object(d.jsxs)("div",{className:"modal max-w-md mx-5 xl:max-w-xl lg:max-w-xl md:max-w-xl bg-secondary-light dark:bg-primary-dark max-h-screen shadow-lg flex-row rounded-lg relative",children:[Object(d.jsxs)("div",{className:"modal-header flex justify-between gap-10 p-5 border-b border-ternary-light dark:border-ternary-dark",children:[Object(d.jsx)("h5",{className:" text-primary-dark dark:text-primary-light text-xl",children:"Send me an email to get in touch!"}),Object(d.jsx)("button",{onClick:t,className:"px-4 font-bold text-primary-dark dark:text-primary-light",children:Object(d.jsx)(c.k,{className:"text-3xl"})})]}),Object(d.jsx)("div",{className:"modal-body p-5 w-full h-full",children:Object(d.jsxs)("form",{action:"https://formspree.io/f/xvodvbzk",method:"post",className:"max-w-xl m-4 text-left",children:[Object(d.jsx)("div",{className:"",children:Object(d.jsx)("input",{className:"w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",id:"name",name:"user_name",type:"text",placeholder:"Name","aria-label":"Name",required:!0})}),Object(d.jsx)("div",{className:"mt-6",children:Object(d.jsx)("input",{className:"w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",name:"user_email",type:"email",placeholder:"Email",required:!0})}),Object(d.jsx)("div",{className:"mt-6",children:Object(d.jsx)("textarea",{className:"w-full px-5 py-2 border dark:border-secondary-dark rounded-md text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",name:"message",cols:"14",rows:"6",placeholder:"Message"})}),Object(d.jsx)("div",{className:"mt-6 pb-4 sm:pb-1",children:Object(d.jsx)("span",{type:"submit",value:"Send",className:"px-4\r sm:px-6\r py-2\r sm:py-2.5\r text-white\r bg-indigo-500\r hover:bg-indigo-600\r rounded-md\r focus:ring-1 focus:ring-indigo-900 duration-500","aria-label":"Submit Request",children:Object(d.jsx)(u.a,{title:"Ping Me!"})})})]})}),Object(d.jsx)("div",{className:"modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t text-right",children:Object(d.jsx)("span",{onClick:t,type:"button",className:"px-4\r sm:px-6\r py-2 bg-gray-600 text-primary-light hover:bg-ternary-dark dark:bg-gray-200 dark:text-secondary-dark dark:hover:bg-primary-light\r rounded-md\r focus:ring-1 focus:ring-indigo-900 duration-500","aria-label":"Close Modal",children:Object(d.jsx)(u.a,{title:"Close"})})})]})})})]})},f=(a.p,a.p,a.p+"static/media/SALIGHTLOGO.910056d3.png"),y=a.p+"static/media/SADARKLOGO.d74829be.png",O=function(){var e=Object(s.useState)(!1),t=Object(x.a)(e,2),a=t[0],r=t[1],i=Object(s.useState)(!1),o=Object(x.a)(i,2),l=o[0],m=o[1],h=Object(p.a)(),b=Object(x.a)(h,2),O=b[0],w=b[1];function v(){l?(document.getElementsByTagName("html")[0].classList.remove("overflow-y-hidden"),m(!1)):(document.getElementsByTagName("html")[0].classList.add("overflow-y-hidden"),m(!0))}return Object(d.jsxs)(j.a.nav,{initial:{opacity:0},animate:{opacity:1},id:"nav",className:"sm:container sm:mx-auto",children:[Object(d.jsxs)("div",{className:"z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6",children:[Object(d.jsxs)("div",{className:"flex justify-between items-center px-4 sm:px-0",children:[Object(d.jsx)("div",{children:Object(d.jsx)(n.b,{to:"/",children:"dark"===O?Object(d.jsx)("img",{src:f,className:"w-30",alt:"Dark Logo"}):Object(d.jsx)("img",{src:y,className:"w-30",alt:"Dark Logo"})})}),Object(d.jsx)("div",{onClick:function(){return w(O)},"aria-label":"Theme Switcher",className:"block sm:hidden ml-0 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer",children:"dark"===O?Object(d.jsx)(c.h,{className:"text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl"}):Object(d.jsx)(c.j,{className:"text-gray-200 hover:text-gray-50 text-xl"})}),Object(d.jsx)("div",{className:"sm:hidden",children:Object(d.jsx)("button",{onClick:function(){r(!a)},type:"button",className:"focus:outline-none","aria-label":"Hamburger Menu",children:Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",className:"h-7 w-7 fill-current text-secondary-dark dark:text-ternary-light",children:a?Object(d.jsx)(c.k,{className:"text-3xl"}):Object(d.jsx)(c.g,{className:"text-3xl"})})})})]}),Object(d.jsxs)("div",{className:a?"block m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none":"hidden",children:[Object(d.jsx)(n.b,{to:"/work-experience",className:"font-general-medium block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark","aria-label":"work-experience",children:"Experience"}),Object(d.jsx)(n.b,{to:"/projects",className:"font-general-medium block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark","aria-label":"projects",children:"Projects"}),Object(d.jsx)(n.b,{to:"/about-me",className:"font-general-medium block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark","aria-label":"projects",children:"About Me"}),Object(d.jsx)(n.b,{to:"/articles",className:"font-general-medium block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark","aria-label":"articles",children:"Articles"}),Object(d.jsx)("div",{className:"border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark",children:Object(d.jsx)("span",{onClick:v,className:"font-general-medium sm:hidden block text-left text-md bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-sm px-4 py-2 mt-2 duration-300 w-24","aria-label":"Hire Me Button",children:Object(d.jsx)(u.a,{title:"Contact Me"})})})]}),Object(d.jsxs)("div",{className:"font-general-medium hidden m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none",children:[Object(d.jsx)(n.b,{to:"/work-experience",className:"block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark","aria-label":"work-experience",children:"Experience"}),Object(d.jsx)(n.b,{to:"/projects",className:"block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark","aria-label":"projects",children:"Projects"}),Object(d.jsx)(n.b,{to:"/about-me",className:"block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark","aria-label":"projects",children:"About Me"}),Object(d.jsx)(n.b,{to:"/articles",className:"block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark","aria-label":"articles",children:"Articles"})]}),Object(d.jsxs)("div",{className:"hidden sm:flex justify-between items-center flex-col md:flex-row",children:[Object(d.jsx)("div",{className:"hidden md:flex",children:Object(d.jsx)("span",{onClick:v,className:"text-md font-general-medium bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm rounded-md px-5 py-2.5 duration-300","aria-label":"Hire Me Button",children:Object(d.jsx)(u.a,{title:"Contact Me"})})}),Object(d.jsx)("div",{onClick:function(){return w(O)},"aria-label":"Theme Switcher",className:"ml-8 bg-primary-light dark:bg-ternary-dark p-3 shadow-sm rounded-xl cursor-pointer",children:"dark"===O?Object(d.jsx)(c.h,{className:"text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl"}):Object(d.jsx)(c.j,{className:"text-gray-200 hover:text-gray-50 text-xl"})})]})]}),Object(d.jsxs)("div",{children:[l?Object(d.jsx)(g,{onClose:v,onRequest:v}):null,l?v:null]})]})},w=(a(38),function(){var e=Object(s.useState)(!1),t=Object(x.a)(e,2),a=t[0],r=t[1];Object(s.useEffect)((function(){return window.addEventListener("scroll",n),function(){window.removeEventListener("scroll",n)}}));var n=function(){!a&&window.pageYOffset>400?r(!0):a&&window.pageYOffset<=400&&r(!1)};return window.addEventListener("scroll",n),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(c.b,{className:"scrollToTop",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},style:{height:30,width:30,borderRadius:50,right:10,bottom:50,display:a?"flex":"none",padding:5,color:"#36454F"}})})}),v=a(32),k=a(31),N=a(33),S=a(27),C=Object(s.lazy)((function(){return a.e(4).then(a.bind(null,57))}));var I=function(){return Object(d.jsx)(r.a,{children:Object(d.jsxs)("div",{className:" bg-secondary-light dark:bg-primary-dark transition duration-300",children:[Object(d.jsxs)(n.a,{children:[Object(d.jsx)(o,{}),Object(d.jsx)(O,{}),Object(d.jsx)(s.Suspense,{fallback:"",children:Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{path:"/",element:Object(d.jsx)(C,{})}),Object(d.jsx)(i.a,{path:"/personal-portfolio",element:Object(d.jsx)(C,{})}),Object(d.jsx)(i.a,{path:"work-experience",element:Object(d.jsx)(v.a,{})}),Object(d.jsx)(i.a,{path:"projects",element:Object(d.jsx)(k.a,{})}),Object(d.jsx)(i.a,{path:"about-me",element:Object(d.jsx)(N.a,{})}),Object(d.jsx)(i.a,{path:"articles",element:Object(d.jsx)(S.a,{})})]})}),Object(d.jsx)(b,{})]}),Object(d.jsx)(w,{})]})})},E=function(e){e&&e instanceof Function&&a.e(5).then(a.bind(null,55)).then((function(t){var a=t.getCLS,r=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),r(e),s(e),n(e),i(e)}))},T=a(34),P=document.getElementById("root");Object(T.createRoot)(P).render(Object(d.jsx)(I,{})),E()}},[[49,1,2]]]);
//# sourceMappingURL=main.cf3f2b59.chunk.js.map