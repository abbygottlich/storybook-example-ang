import { storiesOf } from "@storybook/angular";
import { CompletedComponent } from "../app/components/completed/completed.component";

storiesOf("Completed", module).add("default view", () => ({
  component: CompletedComponent
}));
