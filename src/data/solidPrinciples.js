import solidArticleImage from '../images/solid.png';


export const solidPrinciple = {
    title: "SOLID Princples",
    date: "October 26, 2023",
    content:     <>
    <p className="mb-8"> The SOLID principles are a set of guidelines for writing efficient and scalable code. These guidelines were introduced by Robert C. Martin to 
    help developers write code that is not only easy to understand and modify but also avoids common pitfalls that developers encounter while writing code. The SOLID acronym stands for: </p>
    <li className="text-left"><strong>S</strong>ingle Responsibility Principle</li>
    <li className="text-left"><strong>O</strong>pen Closed Principle</li>
    <li className="text-left"><strong>L</strong>iskov Subsitution Principle</li>
    <li className="text-left"><strong>I</strong>nterface Segregation Principle</li>
    <li className="text-left mb-4"><strong>D</strong>ependency Inversion Principle</li>

    <p className="mb-4">Let us explore and examine each of these principles, why they might be useful, and provide useful examples for practical demonstration. </p>
    <h1 className="mb-4 mt-4 font-general-medium text-2xl bold-text" >Single Responsibility Principle: </h1>
    <p className="mb-8">The Single Responsibility Principle states that <strong> a class should have one reason to change</strong>. In other words, a class should have
    one responsibility, and it should carry out that responsibility well.  </p>

    <p className="mb-8">When a class has several responsibilities, it becomes harder to manage and understand the class. Changing one responsibility may 
    affect other responsibility as well, which can lead to unintended consequences and more bugs in a system. </p>
    </>,
    imageUrl: solidArticleImage
}