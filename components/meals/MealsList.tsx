import meals from '@/prisma/products.json';

const MealsList = () => {
  return (
    <div>
      {meals.map((meal) => {
        const { name, description } = meal;
        return (
          <div key={name} className='flex flex-col'>
            <h2 className='underline'>{name}</h2>
            <p>{description}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default MealsList;
