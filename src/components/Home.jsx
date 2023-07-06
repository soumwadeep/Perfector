import homepic from "../images/home.webp";
const Home = () => {
  return (
    <section>
      <div className="row">
        <div className="col-sm">
          <div className="outer">
            <div className="middle">
              <div className="inner">
                <h1>Welcome To Perfector</h1><br/>
                <p>
                  Feeling Depressed Because of a Lack of Practice? Want to Excel
                  in Your Daily Tasks?
                </p>
                <p>
                  Look no further! Perfector is here to help you overcome your
                  weaknesses and succeed in your favorite subjects. With
                  Perfector, you can create personalized to-do lists focused on
                  the areas you want to improve. By breaking down your goals
                  into manageable daily tasks, you'll be well on your way to
                  achieving success!
                </p>
                <p>
                  Don't let a lack of practice bring you down. With Perfector,
                  you'll stay motivated and make progress every day. Start using
                  Perfector today and unlock your full potential!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm">
          <div className="outer">
            <div className="middle">
              <div className="inner">
                <img src={homepic} alt="home" id="animateimg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
