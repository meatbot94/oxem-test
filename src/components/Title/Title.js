import './styles/index.css';

const { CONTENT } = require('../../configs/config.json');

const Title = ({ mix }) => <h1 className={`${mix} title`}>{CONTENT.HEADER.TITLE}</h1>;

export default Title;
