import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Entry } from "~/components/entry/entry";
import { testData } from "testdata";

export const useData = routeLoader$(async () => {
  return await testData();
});

export default component$(() => {
  const data = useData();

  return (
    <table>
      <tbody>
        {data.value.map((entry) => (
          <Entry key={entry.id} id={entry.id} name={entry.name} />
        ))}
      </tbody>
    </table>
  );
});
