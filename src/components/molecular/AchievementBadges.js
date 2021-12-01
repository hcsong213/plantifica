import Badge from "../atomic/Badge";
import achievement1 from "./achievementIcons/achievement1.png";
import achievement2 from "./achievementIcons/achievement2.png";
import achievement3 from "./achievementIcons/achievement3.png";
import achievement4 from "./achievementIcons/achievement4.png";
/**
 * @param {Object} user user object from the firestore user collection
 * @returns Achievement badges that are colored in if the user earned them
 */
export default function AchievementBadges({ numPlants }) {
  
  return (
    <div className="d-flex flex-row">
      <Badge title="Newbie Planter" earned={true} image={achievement1} />
      <Badge
        title="Rookie Planter"
        earned={numPlants >= 1}
        image={achievement2}
      />
      <Badge
        title="Green Thumb"
        earned={numPlants >= 3}
        image={achievement3}
      />
      <Badge
        title="Plant Master"
        earned={numPlants >= 5}
        image={achievement4}
      />
    </div>
  );
}
