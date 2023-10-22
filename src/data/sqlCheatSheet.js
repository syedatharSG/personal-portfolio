import sqlCheatSheetP1 from '../images/sql-basics-cheat-sheet-page-1.png';
import sqlCheatSheetP2 from '../images/sql-basics-cheat-sheet-page-2.png';
import SQLArticleImage from '../images/SQLArticleImage.jpg';

export const sqlCheatSheet = {
    title: "SQL Basics Cheat Sheet",
        date: "October 10, 2023",
        content:     <>
        <p> Recently, I stumbled across a SQL cheat sheet that it worth including in an article. As developers, we often have to craft queries to 
        retrieve data and conduct some analysis. While complex data analysis may require the expertise of a seasoned data analyst, the SQL cheat sheet allow 
        developers to perform simple yet essential data analysis on tables in a database.
      </p>

      <img src={sqlCheatSheetP1} alt="Centered Image" className="mt-8 mb-8 flex justify-center items-center w-99 h-48 object-cover rounded-md mx-auto" />
      <img src={sqlCheatSheetP2} alt="Centered Image" className="mt-8 mb-8 flex justify-center items-center w-99 h-48 object-cover rounded-md mx-auto" />
    
      <p>The cheat sheet covers how to query from a single or multiple tables, filter output with null or non-null values, utilize wildcards, inequality
       signs, and specify ranges of values. It also demonstrates how to join multiple tables using the infamous JOIN operator. Additionally, it 
       illustrates how to harness the power of AGGREGATE functions (AVG, COUNT, MAX, MIN, SUM) and GROUP output by a specific column. Furthermore, it 
       shows how to use SET OPERATIONS such as UNION, INTERSECT, and EXCEPT to combine results from two or more queries. </p> 
      <p className="mb-8">If you'd like to access the cheat sheet in text form, you can access it <a href="https://learnsql.com/blog/sql-basics-cheat-sheet/" className="text-ternary-dark dark:text-ternary-light hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"
 target="_blank">here:</a>
     </p> 
     <p>All in all, this cheat sheet is a valuable tool that concisely covers the fundamentals of SQL. It also serves as an excellent refresher for 
     those already familiar with SQL and sets them up to learn more complex SQL commands. </p>
      </>,
        imageUrl: SQLArticleImage,
}