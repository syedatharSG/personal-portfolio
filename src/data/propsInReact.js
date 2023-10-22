import PropsReactJSArticleImage from '../images/PropsReactJSArticle.png';
import ParentComponentExample from '../images/ParentComponentExample.png';
import ParentComponentExample2 from '../images/ParentComponentExample2.png';
import ParentComponentExample3 from '../images/ParentComponentExample3.png';

import ChildComponentExample from '../images/ChildComponentExample.png';
import ChildComponentExample2 from '../images/ChildComponentExample2.png';
import ChildComponentExample3 from '../images/ChildComponentExample3.png';
import ChildComponentExample4 from '../images/ChildComponentExample4.png';

export const propsInReact = {
    title: "Props in React JS",
        date: "October 12, 2023",
        content:     <>
        <p>
        React JS is arguably the most popular JavaScript library in recent years. Many real-world applications such as Amazon, Netflix, and Facebook 
        use React to create a seamless UI/UX experience for their users. In this article, I will explain the purpose of props, how to use them, and why 
        they are essential for mastering React. Props, short for "properties," play a crucial role in passing data into React components, 
        enabling these components to access specific, customized values provided through the input (props). Let's delve into a practical 
        example to better understand how props work.
      </p>
      <img src={ParentComponentExample} alt="Parent Component Example 1" className="mt-8 mb-8 flex justify-center items-center w-96 h-48 object-cover rounded-md mx-auto" />
      <p> In the code snippet, we have a parent component called <em>App</em>. It declares an <em>h1</em> with the text "Songs" and renders a child component called <em>Song </em>
        within a div. In React, components are ALWAYS passed from parent to child, never the other way around. Now, let's take a closer look at the child component to see how props are utilized:</p>

      <img src={ChildComponentExample} alt="Child Component Example" className="mt-8 mb-8 flex justify-center items-center w-99 h-48 object-cover rounded-md mx-auto" />

      <p>The child component currently has an image, name, description, and the artist's name. If we render the <em>Song</em> component multiple times, the result would be identical each time, 
      which is not quite useful to us.</p>

      <img src={ParentComponentExample2} alt="Parent Component Example 2" className="mt-8 mb-8 flex justify-center items-center w-96 h-48 object-cover rounded-md mx-auto" />

      <p>The Song component will produce the same output every time it's rendered. But what if an application wants to use the Song component with 
      dynamic and flexible content, where the image, description, name, and artist fields can alter? This is where props come to the rescue! By passing customized 
      values from a parent component to a child component, we can render the Song component in distinct ways, obtaining a unique output each time 
      we provide different values to the component.</p>
      
      <img src={ParentComponentExample3} alt="Parent Component Example 2" className="mt-8 mb-8 flex justify-center items-center w-96 h-48 object-cover rounded-md mx-auto" />

      <img src={ChildComponentExample2} alt="Child Component Example 2" className="mt-8 mb-8 flex justify-center items-center w-99 h-48 object-cover rounded-md mx-auto" />

      <p className="mb-8">In the App component, we pass unique image, name, description, and artist values to the child component, Song. The child component takes props 
      as a function parameter and uses these values to populate the fields of the Song component. This way, the Song component can display content that 
      is specific to each song.</p>
      <p>It's important to note that the name "props" can be changed to any identifier you prefer. 
      However, using <em>props</em> as a naming convention is a good practice to easily identify that you are working with props.</p>
      <p>In terms of writing props, there are a couple of ways we can make the code concise in the <em>Song</em> component using the destructuring approach:</p>

      <img src={ChildComponentExample3} alt="Child Component Example 3" className="mt-8 mb-8 flex justify-center items-center w-99 h-48 object-cover rounded-md mx-auto" />

      <img src={ChildComponentExample4} alt="Child Component Example 4" className="mt-8 mb-8 flex justify-center items-center w-99 h-48 object-cover rounded-md mx-auto" />

      <p className="mb-8">Both of these approaches yield the same output. Destructuring makes the code succinct and readable, however if you prefer the original approach, that is completletly acceptable as well.</p>
      <p>In summary, we now have a solid understanding of how props work in React JS. By harnessing the power of props, we can create web pages with 
      dynamic data outputs, making our applications more flexible and versatile. </p>

      </>,
        imageUrl: PropsReactJSArticleImage,
}