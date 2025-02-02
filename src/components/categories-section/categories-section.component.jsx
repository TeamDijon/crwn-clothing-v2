import CategoryItem from "../category-item/category-item.component";

import "./categories-section.styles.scss";

const CategoriesSection = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoriesSection;
