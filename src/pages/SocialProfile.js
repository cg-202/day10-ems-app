import { useDispatch, useSelector } from "react-redux";

export function SocialProfile() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  return (
    <div>
      <h1>{state.social.title}</h1>
    </div>
  );
}
