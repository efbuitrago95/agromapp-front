import { createHashHistory } from "history";

const history = createHashHistory();
history.listen(() => {});
export { history };
