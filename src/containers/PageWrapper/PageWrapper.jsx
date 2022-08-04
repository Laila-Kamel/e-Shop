import style from './PageWrapper.module.scss'

const PageWrapper = (props) => {
    console.log(props);

    const { children } = props;
    console.log(props);
    console.log({children});
    return (
    // <h1>eshop Project</h1>
    <div className={style.Wrap}>{children}</div>
    )
}

export default PageWrapper