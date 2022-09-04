import React from 'react'
import Header from '../components/Header'

const Main = () => {

  const styles = {
    container: `h-[400px] w-full flex p-[20px] flex-col`,
    title: `text-2xl font-bolder mb-[20px] mt-[30px] mb-24 ml-[40px]`,
    cards: `h-full w-full flex gap-[100px] justify-between mb-[30px] ml-[30px]`,
    card1: `h-[130px] w-[400px] p-[20px] rounded-3xl bg-gradient-to-l from-[#0d141c] to-[#42667e] relative cursor-pointer transition-all duration-300  hover:scale-105 hover:shadow-xl border-2 border-[#fb9701]`,
    cardCross: `h-[180px] w-[125px] rounded-3xl absolute bottom-[20px] left-[20px] transition-all duration-300 hover:scale-105 flex  overflow-hidden`,
  }

  return (
    <div className={styles.container}>
      <Header />
      <div className="border border-sky-500 md:flex">
        <div className="w-5/12 sm:w-3/12 px-3">
          <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png" alt="..." className="shadow-lg rounded-full max-w-full h-auto align-middle border-none" />
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main