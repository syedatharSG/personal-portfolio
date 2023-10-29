import ReactHooksArticleImage from '../images/reactHooksArticleImage.png';
import reactHooksClassComponentsExample from '../images/reactHooksClassComponentsExample.png';
import reactHooksFunctionComponentsExample from '../images/reactHooksFunctionComponentsExample.png';
import reactUseStateHookExample from '../images/reactUseStateHookExample.png';


export const hooksinReact = {
    title: "Hooks in React JS",
    date: "October 18, 2023",
    content:     <>
    <p className="mb-8">
        Imagine you have a magical toolbox for building things with building blocks, and we can use these building blocks to build anything we like. Consider these building blocks are pieces of your web page, like buttons and pictures.
        Now, in the past, we had a special way to build things, but it was a bit tricky, like a puzzle. It was called "class components" (we will cover class componenets later in the article). But now, we have a new, simpler way called "React Hooks."
        React Hooks are like a set of cool tools that make building things with building blocks much easier and more fun. They help us organize our building blocks, move them around, and even change their colors or shapes easily.
        So, React Hooks are like magical tools that allow us create amazing web pages with less effort and more fun than the aforementioned class components. 
    </p>
    <img src={reactHooksClassComponentsExample} alt="Class Component in React JS" className="mt-8 mb-8 flex justify-center items-center w-99 h-48 object-cover rounded-md mx-auto" />
    <p className="mb-8">
        In the above example, we using class component to keep track of state and lifecycle of a component. Prior to React 16.8, this is essentially how one could keep track of state. 
        Let's break down the class component:
        <li>The class component must include the <em>extends React.Component</em> statement, this statement creates an inheritance to <em>React.Component</em>, 
        and gives your component access to React.Component's functions. The component also requires a <em>render()</em> method, this returns HTML.</li>
        <li>If there is a <em>constructor()</em> function in your component, this function will be called when the component gets initialized. We also incorporte 
        the <em>super()</em> statement that executes the parent component's contructor, and in return your component gets access to all functions in the parent component. We are fundamentally honoring the inheritance relationship between the parent and child component.
        </li>
        <li>React Class components have a built-in <em>state</em> object that can be used to store property values that belongs in a component. When the state changes, the component will automatically re-render.</li>
        <li>We can alter the state object with <em>setState</em> function that gives us ability to change state values in a component. In the example above, <em>ChangeColor</em> function sets the car's color to blue as opposed to purple that we initialized in the constructor. 
        By incorporating this functionality, whenever the user clicks <em>Change Color</em> button, the text will go from "It is a purple Challenger from 1975." to "It is a blue Challenger from 1975."</li>

        With hooks, we can achieve the same functionality using less code that's also easier to understand. Take a look at the example below:

        <img src={reactHooksFunctionComponentsExample} alt="Function Component in React JS" className="mt-8 mb-8 flex justify-center items-center w-99 h-48 object-cover rounded-md mx-auto" />
 
        The above utilizes the <em>useState</em> hook to keep track of the car's state. It performs the same functionality as the class component that's described with much less code.
        We use the <em>carState</em> to hold the initial values of the car. The <em>ChangeColor</em> function copies every value over from the car object, and only sets color to blue.
        By doing so, the button changes the car's color from purple to blue.
    </p>

    Now that we have differentiated between class componenets and function components, let us take a look at some of the most common hooks that we will cover in this article:
    <li className='text-left'>UseState</li>
    <li className='text-left'>UseEffect</li>
    <li className='text-left'>UseContext</li>
    <li className='text-left'>UseRef</li>
    <li className='text-left'>UseReducer</li>
    <li className='text-left'>UseCallback</li>
    <li className='text-left'>UseMemo</li>

    <h1 className="mb-4 mt-4 font-general-medium text-2xl">UseState:</h1>
    <p>UseState is perhaps the most common hook you've come across, and it is also the easiest to understand and implement in React JS. Previously, if we had to store an object's state, we had to follow a series of steps and use class components to achieve the end result. This is an arduous process and
    with function components, we can achieve similar result by using the useState hook. In a program, we may have to keep track of an object's state, and the useState hook helps us accomplish this goal seamlessly. To implement
    state using a useState hook, here's an example: </p>

    <img src={reactUseStateHookExample} alt="UseState hook in React JS" className="mt-8 mb-8 flex justify-center items-center w-99 h-48 object-cover rounded-md mx-auto" />

    <p>In the example above, we are utilizing a useState hook to keep track of <em>Count</em> variable. With the use of buttons, we can either increment or decrement 
    the count value by 1. Here, the code is neat and concise without using any redundant code as it was previously shown in class components. When we declare a useState hook, we can define an initial value of the state, and in this case, we have 0 as denoted by <em> <bold>useState(0)</bold></em>. 
    The count variable holds this initial value. The setCount variable is responsible for the value we are going to set in the code later on. Hence, when we delcare buttons, we trigger an anonymous function 
    upon <em>onClick</em> event on the button — we set the setCount variable to increment or decrement with the count value depending on the button you press. There's also the choice to reset count that sets the <em>setCount</em> 
    variable to 0. And with this simple yet effective change in approach, we can store an object's state and do some very cool things with it.</p>
    <p>Compare and contrast it with the class component approach, and it is not so difficult to see why useState hook is preferred over the aforementioned approach. We can write code quickly and succinctly to 
    achieve the same end result, and that is essentially the power and main usage of a useState hook! </p>

    </>,
    imageUrl: ReactHooksArticleImage,
}