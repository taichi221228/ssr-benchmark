import { component$ } from "@builder.io/qwik";

type Props = {
  id: string;
  name: string;
};

export const Entry = component$<Props>(({ id, name }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
    </tr>
  );
});
