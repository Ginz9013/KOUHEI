/* eslint-disable react/react-in-jsx-scope */

function About() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center text-white bg-secondary-black px-48">
      <div className="flex">
        {/* Person & Experience */}
        <div className="w-2/5 mr-32">
          {/* Person */}
          <div className="mb-16">
            <h2 className="text-5xl mb-8">
              Kouhei <small className="text-base">by KOUHEI Studio</small>
            </h2>
            <p className="mb-4 leading-6">
              資深平面設計師，擅長結合行銷與商業概念，幫助客戶進行品牌塑造，讓理念與實際市場接軌。
            </p>
            <p className="leading-6">
              同時身為前端開發者，熟悉 React 與 Vue
              框架，具備中小型網站開發能力。關注細節與使用者體驗，並持續精進各項能力。
            </p>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-5xl mb-8">Experience</h2>
            <ul>
              <li className="flex items-center mb-2">
                <div className="w-2 h-2 bg-primary-blue mr-2"></div>
                <p className="text-lg">敬喆實業股份有限公司 - 設計</p>
              </li>
              <li className="flex items-center mb-2">
                <div className="w-2 h-2 bg-primary-blue mr-2"></div>
                <p className="text-lg">日商飛龍文具股份有限公司 - 設計</p>
              </li>
              <li className="flex items-center mb-2">
                <div className="w-2 h-2 bg-primary-blue mr-2"></div>
                <p className="text-lg">HowTrue 好初手作烘焙 - 品牌負責人</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Skills */}
        <div className="w-96">
          <h2 className="text-5xl mb-8">Skills</h2>
          <ul className="text-2xl mr-12">
            <li className="border border-primary-blue py-2">
              <h3 className="w-36 text-center ">HTML</h3>
            </li>
            <li className="flex items-center border border-primary-blue py-2">
              <h3 className="w-36 text-center">CSS</h3>
              <ul className="text-xl mx-4">
                <li className="font-bold text-primary-blue">Tailwindcss</li>
                <li className="inline mr-4">Bootstrap</li>
                <li className="inline">SASS</li>
              </ul>
            </li>
            <li className="flex items-center border border-primary-blue py-2">
              <h3 className="w-36 text-center">JavaScript</h3>
              <ul className="text-xl ml-4">
                <li className="font-bold text-primary-blue">React</li>
                <li className="inline mr-4">Vue</li>
                <li className="inline">jQuery</li>
              </ul>
            </li>
            <li className="border border-primary-blue py-2">
              <h3 className="w-36 text-center">npm</h3>
            </li>
            <li className="flex items-center border border-primary-blue py-2">
              <h3 className="w-36 text-center">Webpack</h3>
              <ul className="text-xl ml-4">
                <li>Vite</li>
                <li>Gulp</li>
              </ul>
            </li>

            <li className="border border-primary-blue py-2">
              <h3 className="w-36 text-center">Git</h3>
            </li>
            <li className="border border-primary-blue py-2">
              <h3 className="w-36 text-center">Firebase</h3>
            </li>
            <li className="flex items-center border border-primary-yellow py-2">
              <h3 className="w-36 text-center">Figma</h3>
              <ul className="text-xl ml-4">
                <li>Adobe XD</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
