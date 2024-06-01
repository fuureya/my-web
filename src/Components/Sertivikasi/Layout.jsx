const Layout = (props) => {
  return (
    <div className="container bg-neutral-950 md:py-10  lg:px-10 px-6">
      {props.children}
    </div>
  );
};

export default Layout;
