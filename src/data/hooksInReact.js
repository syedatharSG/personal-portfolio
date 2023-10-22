import ReactHooksArticleImage from '../images/reactHooksArticleImage.png';
import reactHooksClassComponentsExample from '../images/reactHooksClassComponentsExample.png';

export const hooksinReact = {
    title: "Hooks in React JS",
    date: "October 18, 2023",
    content:     <>
    <p>
        Imagine you have a magical toolbox for building things with building blocks, and we can use these building blocks to build anything we like. Consider these building blocks are pieces of your web page, like buttons and pictures.
        Now, in the past, we had a special way to build things, but it was a bit tricky, like a puzzle. It was called "class components" (we will cover class componenets later in the article). But now, we have a new, simpler way called "React Hooks."
        React Hooks are like a set of cool tools that make building things with building blocks much easier and more fun. They help us organize our building blocks, move them around, and even change their colors or shapes easily.
        So, React Hooks are like magical tools that allow us create amazing web pages with less effort and more fun than the aforementioned class components. 
    </p>
    <img src={reactHooksClassComponentsExample} alt="State in React Class Component" className="mt-8 mb-8 flex justify-center items-center w-99 h-48 object-cover rounded-md mx-auto" />
    <p>
        In the above example, we using class component to keep track of state and lifecycle of a component. Prior to React 16.8, this is essentially how one could keep track of state. 
        Let's break down the class component:
        <li>The class component must include the <em>extends React.Component</em> statement, this statement creates an inheritance to <em>React.Component</em>, 
        and gives your component access to React.Component's functions. The component also requires a <em>render()</em> method, this returns HTML.</li>
        <li>If there is a <em>constructor()</em> function in your component, this function will be called when the component gets initialized. We also incorporte 
        the <em>super()</em> statement that executes the parent component's contructor, and in return your component gets access to all functions in the parent component. We are fundamentally honoring the inheritance relationship between the parent and child component.
        </li>
        <li>React Class components have a built-in <em>state</em> object that can be used to store property values that belongs in a component. When the state changes, the component will automatically re-render.</li>
        <li>We can alter the state object with <em>setState</em> function that gives us ability to change state values in a component. In the example above, <em>ChangeColor</em> function sets the car's color to blue as opposed to red that we initialized in the constructor. 
        By incorporating this functionality, whenever the user clicks <em>Change Color</em> button, the text will go from "It is a purple Challenger from 1975" to "It is a blue Challenger from 1975"</li>

        However, with the addition of Hooks, we can achieve the same result with Function components. 
    </p>


    </>,
    imageUrl: ReactHooksArticleImage,
}