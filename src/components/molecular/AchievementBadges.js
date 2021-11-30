import Badge from "../atomic/Badge";

/**
 * @param {Object} user user object from the firestore user collection
 * @returns Achievement badges that are colored in if the user earned them
 */
export default function AchievementBadges({ user }) {
  return (
    <div className="d-flex flex-row">
      <Badge title="Added a plant" earned={true} />
      <Badge title="Added a plant" earned={true} />
      <Badge title="Added a plant" earned={true} />
      <Badge title="Added a plant" earned={false} />
    </div>
  );
}
