const FooterNavItem = ({ navTitle, navLists }) => {
  return (
    <div className="mb-10 xl:mb-0">
      <h3 className="font-bold text-lg mb-[23px]">{navTitle}</h3>
      <ul>
        {navLists.map((listItem, id) => {
          return (
            <li key={id} className="text-sm mb-4">
              {listItem}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FooterNavItem;
