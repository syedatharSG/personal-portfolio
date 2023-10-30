import ReactHooksArticleImage from '../images/reactHooksArticleImage.png';
import reactHooksClassComponentsExample from '../images/reactHooksClassComponentsExample.png';
import reactHooksFunctionComponentsExample from '../images/reactHooksFunctionComponentsExample.png';
import reactUseStateHookExample from '../images/reactUseStateHookExample.png';
import reactUseEffectHookExample1 from '../images/reactUseEffectHookExample1.png';
import reactUseEffectHookExample2 from '../images/reactUseEffectHookExample2.png';
import reactUseEffectHookExample3 from '../images/reactUseEffectHookExample3.png';
import reactUseReducerHookExample1 from '../images/reactUseReducerHookExample1.png';
import reactUseRefHookExample1 from '../images/reactUseRefHookExample1.png';
import reactUseRefHookExample2 from '../images/reactUseRefHookExample2.png';
import reactUseCallbackHookExample1 from '../images/reactUseCallbackHookExample1.png';
import reactUseCallbackHookExample2 from '../images/reactUseCallbackHookExample2.png';
import reactUseMemoHookExample1 from '../images/reactUseMemoHookExample1.png';


export const hooksinReact = {
    title: "Hooks in React JS",
    date: "October 29, 2023",
    content:     <>
    <p className="mb-8">
        Imagine you have a magical toolbox for building things with building blocks, and we can use these building blocks to build anything we like. Consider these building blocks are pieces of your web page, like buttons and pictures.
        Now, in the past, we had a special way to build things, but it was a bit tricky, like a puzzle. It was called "class components" (we will cover class componenets later in the article). But now, we have a new, simpler way called "React Hooks."
        React Hooks are like a set of cool tools that make building things with building blocks much easier and more fun. They help us organize our building blocks, move them around, and even change their colors or shapes easily.
        So, React Hooks are like magical tools that allow us create amazing web pages with less effort and more fun than the aforementioned class components. 
    </p>
    <img src={reactHooksClassComponentsExample} alt="Class Component in React JS" className="mt-8 mb-8 flex justify-center items-center w-40 h-48 object-cover rounded-md mx-auto" />
    <p className="mb-8">
        In the above example, we are using class component to keep track of state and lifecycle of a component. Prior to React 16.8, this is essentially how one could keep track of state. 
        Let's break down the class component:
        <li className='ml-2 text-left'>The class component must include the <strong>extends React.Component</strong> statement, this statement creates an inheritance to <strong>React.Component</strong>, 
        and gives your component access to React.Component's functions. The component also requires a <strong>render()</strong> method, this returns HTML.</li>
        <li className='ml-2 text-left'>If there is a <strong>constructor()</strong> function in your component, this function will be called when the component gets initialized. We also incorporte 
        the <strong>super()</strong> statement that executes the parent component's contructor, and in return your component gets access to all functions in the parent component. 
        We are fundamentally honoring the inheritance relationship between the parent and child component.
        </li>
        <li className='ml-2 text-left'>React Class components have a built-in <strong>state</strong> object that can be used to store property values that belongs in a component. When the state changes, the component will automatically re-render.</li>
        <li className='ml-2 text-left'>We can alter the state object with <strong>setState</strong> function that gives us ability to change state values in a component. In the example above, <strong>ChangeColor</strong> function sets the car's color to blue as opposed to purple that we initialized in the constructor. 
        By incorporating this functionality, whenever the user clicks <strong>Change Color</strong> button, the text will go from "It is a purple Challenger from 1975." to "It is a blue Challenger from 1975."</li>

        With hooks, we can achieve the same functionality using less code that's also easier to understand. Take a look at the example below:

        <img src={reactHooksFunctionComponentsExample} alt="Function Component in React JS" className="mt-8 mb-8 flex justify-center items-center w-40 h-48 object-cover rounded-md mx-auto" />
 
        The above utilizes the <strong>useState</strong> hook to keep track of the car's state. It performs the same functionality as the class component that's described with much less code.
        We use the <strong>carState</strong> to hold the initial values of the car. The <strong>ChangeColor</strong> function copies every value over from the car object, and only sets color to blue.
        By doing so, the button changes the car's color from purple to blue.
    </p>

    Now that we have differentiated between class componenets and function components, let us take a look at some of the most common hooks that we will cover in this article:
    <li className='ml-2 text-left'>UseState</li>
    <li className='ml-2 text-left'>UseEffect</li>
    <li className='ml-2 text-left'>UseRef</li>
    <li className='ml-2 text-left'>UseReducer</li>
    <li className='ml-2 text-left'>UseCallback</li>
    <li className='ml-2 text-left'>UseMemo</li>

    <h1 className="mb-4 mt-4 font-general-medium text-2xl bold-text" >UseState:</h1>
    <p className="mb-8">UseState is perhaps the most common hook you've come across, and it is also the easiest to understand and implement in React JS. Previously, if we had to store an object's state, we had to follow a series of steps and use class components to achieve the end result. This is an arduous process and
    with function components, we can achieve similar result by using the useState hook. In a program, we may have to keep track of an object's state, and the useState hook helps us accomplish this goal seamlessly. To implement
    state using a useState hook, here's an example: </p>

    <img src={reactUseStateHookExample} alt="UseState hook in React JS" className="mt-8 mb-8 flex justify-center items-center w-99 h-48 object-cover rounded-md mx-auto" />

    <p className="mb-8">In the example above, we are utilizing a useState hook to keep track of <strong>Count</strong> variable. With the use of buttons, we can either increment or decrement 
    the count value by a certain margin. Here, the code is neat and concise without using any redundant code as previously shown in class components. When we declare a useState hook, we can define an variable name for the state, and in this case, we have named it <strong>count</strong>. 
    The setCount is the function that is responsible for the updating the state. Hence, when we delcare buttons, we trigger an anonymous function 
    upon <strong>onClick</strong> event on the button — we set the setCount to increment or decrement with the count value depending on the button you press. There's also the choice to reset count that sets the <strong>setCount</strong> 
    variable to 0. And with this simple yet effective change in approach, we can store an object's state and do some very cool things with it.</p>
    <p>Compare and contrast this approach with the class component approach, and it is not so difficult to see why useState hook is preferred over it. We can write code quickly and succinctly to 
    achieve the same end result, and that is essentially the power and main usage of a useState hook! </p>

    <h1 className="mb-4 mt-4 font-general-medium text-2xl bold-text" >UseEffect:</h1>
    <p className="mb-8">In the realm of React development, the useEffect hook goes hand-in-hand with the useState hook. It serves as the cornerstone of React development and much like bread and butter in a React developer's world.</p>
    <p className="mb-8">UseEffect empowers you to orchestrate side effects within your components. Side effects are essentially actions triggered in 
    response to specific events or changes in your application's state.</p>
    <p className="mb-8">An example use case for useEffect is data retrieval after a component has been rendered. Let's consider a scenario where we have a function named <strong>fetchData</strong>, 
    responsible for this data-fetching task. Our useEffect structure would resemble the following:</p>

    <img src={reactUseEffectHookExample1} alt="UseEffect Example 1" className="mt-8 mb-8 flex justify-center items-center w-64 h-48 object-cover rounded-md mx-auto" />

    <p className="mb-8">This hook's anatomy is comprised of two key components. First, we have a callback function that carries out the desired action. 
    Following that, there's an array named the "array of dependencies." In the given example, when it's left empty, the callback executes as soon as the component renders.
    Now, if you wish to trigger a side effect when a specific variable undergoes changes, you can modify your useEffect to align with this criterion. 
    From the earlier example involving the useState hook, for instance, we might set up useEffect like so:</p>
    <img src={reactUseEffectHookExample2} alt="UseEffect Example 2" className="mt-8 mb-8 flex justify-center items-center w-99 h-48 object-cover rounded-md mx-auto" />

    <p className="mb-8">In this case, the side effect activates when the count variable changes. This allows you to synchronize your component's behavior with dynamic state alterations.</p>
    <p className="mb-8">Lastly, it's worth mentioning that useEffect offers the option to incorporate a <strong>cleanup</strong> function. This function 
    diligently executes when the component bids adieu and unmounts. In line with the fetchData example, including a cleanup function could look something like this:</p>

    <img src={reactUseEffectHookExample3} alt="UseEffect Example 3" className="mt-8 mb-8 flex justify-center items-center w-64 h-48 object-cover rounded-md mx-auto" />

    <p>Cleanup functions within useEffect predominantly serve the purpose of canceling subscriptions. They prevent React from futile attempts to 
    update the state of a component that has already gracefully departed the scene.</p>

    <h1 className="mb-4 mt-4 font-general-medium text-2xl bold-text" >UseReducer:</h1>
    <p className='mb-8'>UseReducer emerges as a potent hook within React, offering native support for implementing reducers, which play a crucial role in managing complex states in your application. </p>
    <p className='mb-8'>In essence, a reducer serves as a function that takes two or more arguments, performs specific actions on them, and yields a 
    singular result derived from those arguments. In the context of React, a reducer operates as a pure function that accepts the previous state and an 
    action as parameters, subsequently returning the next state. This function is termed a reducer because it adheres to the same function type you 
    would utilize with an array's reduce method: <strong>Array.prototype.reduce(reducer, initialValue)</strong>.</p>
    <p className='mb-8'>Now, you might wonder, why do we need useReducer when we already have the useState hook for managing state? The answer lies in 
    scenarios where the new state depends on the previous state or when state changes occur with great frequency in your application. In such cases, 
    useState may lead to unexpected and unpredictable behavior. This is precisely where useReducer steps in as a solution.</p>
    <p className='mb-8'>UseReducer is the tool that React furnishes for seamlessly incorporating reducers into state management. Here's an illustrative implementation:</p>

    <img src={reactUseReducerHookExample1} alt="UseReducer Example 2" className="mt-8 mb-8 flex justify-center items-center w-99 h-48 object-cover rounded-md mx-auto" />

    <p className='mb-8'>The useReducer setup begins by importing the hook from React. Next, a reducer function is declared, taking the current state and an action as 
    parameters. Within this function, a switch statement interprets the action type, executes the corresponding action on the state, and returns the 
    updated state. It's a convention to employ switch statements in reducers, typically using uppercase letters to define action types.</p>

    <p className='mb-4'>Following this, the useReducer hook is established, resembling the useState hook in structure. It defines a state value, a dispatch 
    function for state modification, and takes the reducer function as the first parameter and the default state as the second parameter.
    To update the state, you no longer call the reducer directly. Instead, you invoke the function you've just created, <strong>dispatch</strong>, passing it the pertinent action type you wish to execute. 
    Under the hood, the dispatch function communicates with the reducer to effectuate state changes.</p>
    <p className='mb-4'>In summary, to leverage useReducer, you need two essential components:</p>
    <li className='ml-2 text-left'>A reducer function responsible for consolidating all conceivable state changes.</li>
    <li className='ml-2 mb-8 text-left'>A dispatch function that channels the modifying actions to the reducer.</li>

    <p className='mb-8'>This approach shifts the paradigm of state management. UI elements no longer have the direct authority to alter the state as 
    they did with setState. Instead, they must initiate an action type and traverse through the reducer, fostering a more modular and predictable state 
    management process.</p>

    <h1 className="mb-4 mt-4 font-general-medium text-2xl bold-text" >UseRef:</h1>
    <p className='mb-8'>The useRef hook is a versatile function that provides a mutable reference object. This object's <strong>.current</strong> property is initialized with a 
    specified argument, referred to as <strong>initialValue</strong>. Notably, the object returned by useRef persists throughout the entire lifecycle of the component.</p>
    <p className='mb-8'>There exist two primary purposes for employing useRef: first, it's a mechanism to keep tabs on mutable variables through 
    re-renders, and second, it serves as a means to access DOM nodes or React elements. To declare a reference using the useRef hook, the process is as follows:</p>

    <img src={reactUseRefHookExample1} alt="UseRef Example 1" className="mt-8 mb-8 flex justify-center items-center w-64 h-48 object-cover rounded-md mx-auto" />

    <p className='mb-2'>Subsequently, you can access the reference value through <strong>reference.current</strong>, and modifying it is as straightforward as <strong>reference.current = newValue</strong>. This operation is elegantly simple. Two fundamental principles govern the use of refs:</p>

    <li className='ml-2 text-left'>The value of the reference remains intact between component re-renders, offering stability and continuity.</li>
    <li className='ml-2 mb-8 text-left'>Modifying a reference does not trigger a component re-rendering, distinguishing it from state updates.</li>
    <p className='mb-8'>To illustrate this, consider a scenario where we aim to tally the number of button clicks without causing a component re-render. This objective can be achieved as shown below:</p>
    
    <img src={reactUseRefHookExample2} alt="UseRef Example 2" className="mt-8 mb-8 flex justify-center items-center w-96 h-48 object-cover rounded-md mx-auto" />

    <p className='mb-2'>By manipulating and recording the ref, we circumvent component re-renders while achieving our goal. Consequently, two critical 
    distinctions between references and state emerge:</p>

    <li className='ml-2 text-left'>Updating a reference does not trigger re-rendering, whereas altering the state initiates component re-renders.</li>
    <li className='ml-2 text-left'>Additionally, the update of a reference is synchronous, meaning the modified reference value is instantly available. In 
    contrast, state updates are asynchronous, implying that the state variable is updated following a re-render cycle, not immediately.</li>

    <h1 className="mb-4 mt-4 font-general-medium text-2xl bold-text" >UseCallback:</h1>
    <p className='mb-8'>The useCallback hook is a valuable tool for optimizing the performance of your application by memoizing callback functions that 
    are passed as props. This means that it prevents these functions from being recreated with each re-render, which can be particularly beneficial for efficiency!
    To employ useCallback, you encapsulate the function you intend to pass as a prop to a child component within the hook, as demonstrated below:</p>

    <img src={reactUseCallbackHookExample1} alt="UseCallback Example 1" className="mt-8 mb-8 flex justify-center items-center w-99 h-48 object-cover rounded-md mx-auto" />

    <p className='mb-8'>In essence, useCallback retains the value of the function, preserving it despite the parent component undergoing re-renders. 
    This ensures that the child prop remains consistent as long as the function value remains unchanged. This mitigation strategy effectively addresses 
    the issue of unnecessary re-renders in the child component making the application more efficient in performance.</p>

    <p className='mb-8'>To apply useCallback, you simply wrap it around the function you're defining. Similar to useEffect, useCallback also features a 
    dependency array. Within this array, you can specify variables that, when altered, trigger a change in the function's value. This mechanism works 
    in much the same way as useEffect:</p>

    <img src={reactUseCallbackHookExample2} alt="UseCallBack Example 2" className="mt-8 mb-8 flex justify-center items-center w-64 h-48 object-cover rounded-md mx-auto" />

    <p>In this example, the testingTheTest function remains stable unless the variables x, y, or z change, reflecting the dependency array's role in managing 
    the function's behavior.</p>

    <h1 className="mb-4 mt-4 font-general-medium text-2xl bold-text" >UseMemo:</h1>
    <p className='mb-8'>useMemo, akin to useCallback, is a vital hook in React for optimization. However, its purpose differs subtly; instead of 
    caching an entire function, useMemo caches the result yielded by a function. This caching mechanism can significantly enhance your application's 
    performance.</p>

    <p className='mb-8'>In the following example, useMemo is employed to cache the number 5.</p>

    <img src={reactUseMemoHookExample1} alt="UseMemo Example 1" className="mt-8 mb-8 flex justify-center items-center w-64 h-48 object-cover rounded-md mx-auto" />

    <p className='mb-8'>What's happening here is that useMemo conserves the outcome of the function, specifically the result of <strong>num + 4</strong>. 
    This result, which is the number 5 in this context, is stored for subsequent use.</p>

    <p className='mb-8'>To contrast this with useCallback, consider the following: useCallback would cache the entire function <strong>() => num + 1</strong>, 
    preserving it for later invocations. This distinction is crucial; while useMemo captures the result, useCallback retains the function itself!</p>
    <p className='mb-2'>In summary, useMemo and useCallback are both performance-enhancing tools, but the former focuses on storing function results, whereas the latter 
    is geared toward caching entire functions. These hooks empower you to optimize your React application's efficiency by minimizing redundant 
    calculations and rendering updates.</p>

    <p>We have now covered some of the most common and most significant hooks in React JS. This serves as a great refresher for the veteran devs and a good introduction to the 
    topic for those who are attempting to master React hooks!</p>

    </>,
    imageUrl: ReactHooksArticleImage,
}