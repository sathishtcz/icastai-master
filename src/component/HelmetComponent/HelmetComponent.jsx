import { Helmet } from "react-helmet";

const HelmetComponent = ({ title,canonical }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="keywords" content="ICASTAI, International Conference on Advanced Smart Technologies and AI Innovations  ,Computing, Data Analytics, Algorithms, Big Data, Artificial Intelligence, Machine Learning, Predictive Analytics, Data Science, Optimization Techniques, Computational Methods, Smart Computing, High-Performance Computing, Algorithm Design, International Conference 2025, Advanced Computing, Data-Driven Technologies, Computer Science Conference, Intelligent Systems, Emerging Technologies, Data Mining" />
            <meta name="description" content="The International Conference on Advanced Smart Technologies and AI Innovations 2025 brings together researchers, professionals, and innovators to explore breakthroughs in artificial intelligence, smart systems, and next-generation technologies." />
            <meta name="author" content="ICASTAI Editorial Team" />
            <meta name="robots" content="index, follow" />

            <meta property="og:type" content="website" />
            <meta property="og:title" content="International Conference on Advanced Smart Technologies and AI Innovations" />
            <meta property="og:description" content="The International Conference on Advanced Smart Technologies and AI Innovations 2025 brings together researchers, professionals, and innovators to explore breakthroughs in artificial intelligence, smart systems, and next-generation technologies." />
            <meta property="og:url" content="https://icastai.com/" />
            <meta property="og:image" content="https://icastai.com/assets/images/Logo.png" />

            <link rel="canonical" href={canonical} />
            <link rel="icon" type="image/png" href="https://icastai.com/assets/images/Fav.png" />

        </Helmet>
    );
};

export default HelmetComponent;         