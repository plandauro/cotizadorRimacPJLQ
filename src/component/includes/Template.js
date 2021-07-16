import { Helmet } from "react-helmet-async";

const Template = ({ title, ...props }) => {
  return (
    <div {...props}>
      <Helmet>
        <title>Rimac | {title}</title>
      </Helmet>
      <div className="Body">{props.children}</div>
    </div>
  );
};

export default Template;
