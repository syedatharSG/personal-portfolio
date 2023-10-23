import React, { useState, useEffect } from 'react';
import ArticleCard from './ArticleCard';
import { articleData } from '../data/ArticleData';
import { motion } from 'framer-motion';

const ArticlesPerPage = 5;

const ArticleList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesToDisplay, setArticlesToDisplay] = useState([]);

  // Calculate the total number of pages based on the number of articles
  const totalPages = Math.ceil(articleData.length / ArticlesPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    // Calculate the range of articles to display on the current page
    const endIndex = articleData.length - (currentPage - 1) * ArticlesPerPage;
    const startIndex = Math.max(0, endIndex - ArticlesPerPage);
    const currentArticles = articleData.slice(startIndex, endIndex).reverse();
    setArticlesToDisplay(currentArticles);
  }, [currentPage]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: 'easeInOut', duration: 0.9, delay: 0.2 }}
    >
      <div className="text-center">
        <p className="mt-8 font-general-medium text-2xl sm:text-4xl mb-8 text-ternary-dark dark:text-ternary-light">
          Articles
        </p>
        <div className="flex items-center justify-center min-h-screen">
          <div className="grid grid-rows-1 md:grid-rows-2 lg:grid-rows-3 gap-4">
            {articlesToDisplay.map((article, index) => (
              <ArticleCard
                key={index}
                title={article.title}
                imageUrl={article.imageUrl}
                date={article.date}
                content={article.content}
              />
            ))}
          </div>
        </div>

        {/* Pagination buttons */}
        <div className="mt-4">
          {Array.from({ length: totalPages }, (_, i) => (
            <motion.button
              key={i}
              className={`font-general-medium py-2.5 sm:py-3 px-3 mx-2 mr-2 border-indigo-200 dark:border-ternary-dark rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500 border ${
                currentPage === i + 1 ? 'text-sky-500 dark:text-cyan-500' : ''
              }`}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ArticleList;