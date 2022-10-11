import './styles/index.css';

const Title = ({ mix, config }) => <h1 className={`${mix} title`}>{config.content}</h1>;

export default Title;
