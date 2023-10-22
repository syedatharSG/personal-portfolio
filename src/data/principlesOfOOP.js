import inheritanceCodeExample from '../images/InheritanceCodeExample.png';
import abstractionCodeExample from '../images/AbstractionCodeExample.png';
import encapsulationCodeExample from '../images/EncapsulationCodeExample.png';
import polymorphismCodeExample from '../images/PolymorphismCodeExample.png';
import OOPArticelImage from '../images/OOPArticleImage.png';


export const principlesOfOOP = 
{
    /* ----------------------------Principles of Object Oriented Programming Article ------------------------------------------------------*/
    title: "Principles of Object Oriented Programming",
    date: "October 5th, 2023",
    content:     <>
    <p>  
    There are four main principles, or pillars, of object-oriented programming: Inheritance, Abstraction, Encapsulation, and Polymorphism. 
    This article is a quick guide that goes over these principles concisely.
  </p>
  {/* The following paragraph explains each principle in more detail. */}
  <h2 className="mt-4 mb-4 font-general-medium text-2xl">Inheritance:</h2>
  <p>In Object-Oriented Programming languages, we can inherit methods and attributes from one class to another, creating a relationship 
  between the original class (parent or superclass) and the class that inherits from it (child or subclass).
  </p>

  <img src={inheritanceCodeExample} alt="Inheritance Image" className="mt-8 mb-8 flex justify-center items-center w-99 h-48 object-cover rounded-md mx-auto" />

  <p>The example above uses Java to showcase how Inheritance works. It allows the subclass to use the parent class's attributes and methods without 
  explicitly defining them in its own class. Inheritance promotes code reusability and enables the subclass to define its separate methods, 
  which is an extension to the parent class.</p>
  
  
  <h2 className="mb-4 mt-4 font-general-medium text-2xl">Abstraction:</h2>
  <p>Abstraction is used to hide internal details from a user and present only the essential information. We can understand abstraction by using 
  everyday machines or equipment as examples. For instance, when using a corded lawn mower, the user doesn't need to know the machine's internal 
  workings, such as motors, wires, and metals. Instead, they follow a set of simple steps unrelated to the machine's internals. In OOP, abstraction 
  is achieved through abstract classes and interfaces.
  </p>

   <img src={abstractionCodeExample} alt="Abstraction Image" className="mt-8 mb-8 flex justify-center items-center w-99 h-48 object-cover rounded-md mx-auto" />

  <p className="mb-8">By inheriting an abstract class, as shown in the example, a class like <em>somePhone </em> inherits the <em>Call </em> method without needing 
  to know its internal operations. It must provide an implementation for the <em>Dial </em> method since it's an abstract method, a requirement 
  for classes inheriting abstract classes.</p>
 <p>It is also worth mentioning an abstract class can have its own set of fields/attributes that can be accessed by the subclass.</p> 


 <h2 className="mb-4 mt-4 font-general-medium text-2xl">Encapsulation:</h2>
  <p>The general idea behind this principle is straightforward. For example, you may have an attribute that is not visible from the outside of an 
  object. You encapsulate or bundle it with methods that provide read or write access. Encapsulation allows you to conceal specific information and 
  regulate access to the object's internal state. In the realm of object-oriented programming, we refer to this functionality as getter and setter 
  methods. As the names suggest, a getter method retrieves an attribute, and a setter method modifies it.
  </p>

   <img src={encapsulationCodeExample} alt="Encapsulation Image" className="mt-8 mb-8 flex justify-center items-center w-99 h-48 object-cover rounded-md mx-auto" />

  <p>  The example provided demonstrates that class attributes like <em>selection </em> and <em>quantity </em> cannot be accessed directly 
  but require the use of <em>getSelection </em>, <em>getQuantity </em>, and <em>setQuantity </em> methods. This technique enhances security by 
  limiting direct access to object attributes. </p>

 <h2 className="mb-4 mt-4 font-general-medium text-2xl">Polymorphism:</h2>
  <p>Polymorphism means "many forms" and in layman terms, it refers to classes that are related to one another by inheritance. It allows different 
  classes that inherit from a common parent to perform different tasks with methods of the same name. Consider the class below:
  </p>

   <img src={polymorphismCodeExample} alt="Polymorphism Image" className="mt-8 mb-8 flex justify-center items-center w-99 h-48 object-cover rounded-md mx-auto" />

   <p>The <em>Person</em> class has a method called <em>teach</em>, and the <em>Teacher</em> class has an identical method. Polymorphism utilzies the
   inheritance relationship to perform different tasks. Each class that inherits <em>Person</em> can have its own implementation of <em>teach</em> method. 
   For instance, we can also add a <em>Professor</em> class that has its own <em>teach</em> method with added parameters.</p>
   <p className="mb-8">Polymorphism is incredibly useful when there's different types of objects, and we write classes that can work with all those different 
   types since they all abide by the same API.
   On top of that, it comes in handy whenever we we want to add a new <em>Person</em> to the application without changing any of the existing 
   logic in code.
  </p>
   
  <p>In conclusion, Object-Oriented Programming Principles are powerful tools for developing efficient, scalable, and maintainable software solutions. 
  Embracing these principles empowers developers to write code that withstands the test of time and is easy to manage and modify in the long run.</p>
   
  </>,
    imageUrl: OOPArticelImage,
}