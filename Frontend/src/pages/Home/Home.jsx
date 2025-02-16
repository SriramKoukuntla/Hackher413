import { Header } from "../../components/Header/Header";
import "./Home.css"; // Import the CSS file
import squishEmoji from "../../assets/SquishEmojiSwirlyEyes.png"
import superShockedEmoji from "../../assets/superShockedEmoji.png"

export const Home = () => {
    const SquishEmojiStyle = {
        position: "absolute",
        top: "400px",
        left: "1200px",
        width: "300px",
      };

      const SuperShockedEmojiStyle = {
        position: "absolute",
        top: "400px",
        left: "0px",
        width: "300px",
      };


    return (
        <>
            <Header />
            <div className="home-container">
                <h1 className="home-title">Find Love</h1>
            </div>
            <p className="home-description">
                <span>Find Love… via a proprietary ensemble model leveraging transformer-based,</span>
                <span>architectures deep reinforcement learning, and a fine-tuned neural collaborative </span>
                <span>filtering system— trained on billions of romantic interactions, sentiment embeddings,</span>
                <span>and real-time preference adjustments. Using multi-modal embeddings, Bayesian optimization,</span>
                <span>and recurrent feedback loops, our AI continuously refines your compatibility vector, ensuring a</span>
                <span>Pareto-optimal match that minimizes emotional variance and maximizes long-term relational stability.</span>
                <span>Through quantum entanglement-based heuristics and stochastic gradient descent, we achieve a state-of-the-art</span>
                <span>love prediction framework. All to guarantee an unmatched synergy between your subconscious attraction profile and the</span>
                <span>thermodynamic properties of affection. Our pipeline begins with an end-to-end trained self-supervised transformer,</span>
                <span>properties of affection. Underpinning our probabilistic love engine is a cutting-edge,  Underpinning our</span>
                <span>probabilistic love engine is a cutting-edge, quantum-inspired Markov Decision Process, leveraging</span>
                <span> entropic regularization to balance exploration and exploitation within the relational phase space.</span>

                <span>By dynamically weighting psychosocial compatibility functions against socio-emotional</span>
                <span>expectation matrices, our system eliminates suboptimal pairings with mathematical rigor</span>
                <span>Stochastic Monte Carlo simulations are executed across your historical interaction graph,</span>
                <span>continuously refining a gradient-updated hyperplane...blah blah blah</span>

            </p>
            <img src={squishEmoji} style={SquishEmojiStyle}/>
            <img src={superShockedEmoji} style={SuperShockedEmojiStyle}/>

        </>
    );
};
