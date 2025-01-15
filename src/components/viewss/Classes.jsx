import '../viewss/Classes.scss';
import { Card, CardContainer } from '../UI/Card.jsx';




function Classes(){
    const classList = [
        {
            ClassName: "Pilates",
            ClassCode: "GYM001",
            ClassLevel: 1,
            ClassLeaderID: 1,
            ClassImageURL: "https://images.freeimages.com/images/small-previews/9b8/electronic-components-2-1242738.jpg"
        },
        {
            ClassName: "Cycling",
            ClassCode: "GYM002",
            ClassLevel: 2,
            ClassLeaderID: 2,
            ClassImageURL: "https://images.freeimages.com/images/small-previews/411/light-of-technology-1510575.jpg"
        },
        {
            ClassName: "Boxing",
            ClassCode: "GYM003",
            ClassLevel: 3,
            ClassLeaderID: 3,
            ClassImageURL: "https://images.freeimages.com/images/small-previews/64b/vla-1-1315506.jpg"
        },
        {
            ClassName: "Yoga",
            ClassCode: "GYM004",
            ClassLevel: 1,
            ClassLeaderID: 4,
            ClassImageURL: "https://images.freeimages.com/images/small-previews/293/cable-4-1243085.jpg"
        },
        {
            ClassName: "HIIT (High-Intensity Interval Training)",
            ClassCode: "GYM005",
            ClassLevel: 3,
            ClassLeaderID: 5,
            ClassImageURL: "https://images.freeimages.com/images/small-previews/fa1/cable-5-1243077.jpg"
        },
        {
            ClassName: "Zumba",
            ClassCode: "GYM006",
            ClassLevel: 1,
            ClassLeaderID: 6,
            ClassImageURL: "https://images.freeimages.com/images/small-previews/930/towertv-3-1423238.jpg"
        },
        {
            ClassName: "Strength Training",
            ClassCode: "GYM007",
            ClassLevel: 2,
            ClassLeaderID: 7,
            ClassImageURL: "https://images.freeimages.com/images/small-previews/cf5/cellphone-1313194.jpg"
        },
        {
            ClassName: "Dance Cardio",
            ClassCode: "GYM008",
            ClassLevel: 2,
            ClassLeaderID: 8,
            ClassImageURL: "https://images.freeimages.com/images/small-previews/4e8/sala-de-parto-03-1432033.jpg"
        },
        {
            ClassName: "Spin Class",
            ClassCode: "GYM009",
            ClassLevel: 2,
            ClassLeaderID: 9,
            ClassImageURL: "https://images.freeimages.com/images/small-previews/6cc/monitor-2-1242535.jpg"
        },
        {
            ClassName: "CrossFit",
            ClassCode: "GYM010",
            ClassLevel: 4,
            ClassLeaderID: null,
            ClassImageURL: "https://images.freeimages.com/images/small-previews/402/rocket-in-the-museum-1450195.jpg"
        }
    ];
    return(
        <>
        <h1>Classes</h1>
        <CardContainer>
        {
          classList.map((classItem)=>{
            return(
              <div className ="classCard" key={classItem.ClassCode}>
              <Card>
                 <p>{classItem.ClassCode}</p>
                 <p>{classItem.ClassName}</p>
                 <img src={classItem.ClassImageURL}/>
                
              </Card>
              </div>
           
            )

          })
        }
        </CardContainer>
        </>

    );
}

export default Classes;
