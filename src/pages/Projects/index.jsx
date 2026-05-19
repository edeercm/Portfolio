// import projectsData from '../../data/projects'
// //import Card from '../../components/ui/Card';
// //import ChlsBtn from '../Challenges/components/ChlsBtn';

// const Section = styled.section`
//   width: 100%;
//   height: auto;
//   padding: 7.5rem 0;
//   background-color: var(--third-color);
// `;

// const Title = styled.h4`
//   margin-top: 2.5rem;
//   font-size: 5rem;
//   font-weight: bold;
//   color: var(--main-color);

//   @media (min-width: 575.98px) and (max-width: 991.98px) {
//     font-size: 6.75rem;
//   }

//   @media (max-width: 575.97px) {
//   }
// `;

// const index = () => {
//   return <>
//     <Section>
//       <div className='container text-center'>
//         <Title>Projects.</Title>
//       </div>
//       <div>
//         {projectsData.map((item) => (
//           <Card
//             key={item.id}
//             title={item.title}
//             subtitle={item.subtitle}
//             desc={item.desc}
//             link={item.link}
//             image={item.image}
//           />
//         ))}
//       </div>
//       <div className='container d-flex justify-content-center'>
//         <ChlsBtn />
//       </div>
//     </Section>
//   </>
// }

// export default index