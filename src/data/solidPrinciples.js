import solidArticleImage from '../images/solid.png';
import SRPExample1 from '../images/SRPExample1.png';


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
    affect other responsibilities as well leading to unintended consequences and more bugs in a system. Here's an example that violates SRP (Single Responsibility Principle):</p>

    <img src={SRPExample1} alt="SRP Violation Example" className="mt-8 mb-8 flex justify-center items-center w-40 h-48 object-cover rounded-md mx-auto" />
    
    <p className='mb-8'>The <strong>Invoice</strong> class violates SRP because there are several reasons it may change. For instance, if the logic for <strong>calculateTotal()</strong> changes, 
    the class would be modified. Similarly, if we need to change the way an invoice prints or is saved 
    to the database, the <strong>printInvoice()</strong> and <strong>saveToDb()</strong> methods would be altered. There are several reasons for changing the class, and we know
    a class should have only one responsibility according to SRP. Because the <strong>Invoice</strong> class doesn't adhere to this standard, it violates SRP.</p>


    </>,
    imageUrl: solidArticleImage
}