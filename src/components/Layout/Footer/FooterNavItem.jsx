const FooterNavItem = ({ navTitle, navLists }) => {
  return (
    <div>
      <h3 className="font-bold text-lg mb-[23px]">{navTitle}</h3>
      <ul>
        {navLists.map((listItem) => {
          return <li className="text-sm mb-4 last:mb-0">{listItem}</li>;
        })}
      </ul>
    </div>
  );
};

export default FooterNavItem;
