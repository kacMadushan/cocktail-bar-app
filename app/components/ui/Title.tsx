type TitleProps = {
    title: string;
}

const Title = ({ title }: TitleProps) => {
    return (
        <h1 className="text-center font-heading text-header1 text-secondary">{title}</h1>
    );
}

export default Title;