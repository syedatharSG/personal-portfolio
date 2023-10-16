function AppFooterCopyright() {
	return (
		<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-lg text-ternary-dark dark:text-ternary-light">
			©
				<a
					href="https://syedatharSG.github.io/personal-portfolio"
					className="hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 mr-2 duration-500"
					target="_blank"
                  	rel="noopener noreferrer"
				>
					Software Engineer Portfolio 🖥️
				</a>
				  
				<a
					href="https://syedatharsg.github.io/personal-portfolio/"
					className="text-secondary-dark dark:text-secondary-light font-medium uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 ml-1 duration-500"
					target="_blank"
                  	rel="noopener noreferrer"
				>
					SYED ATHAR 💼
				</a>
			</div>
		</div>
	);
}

export default AppFooterCopyright;
