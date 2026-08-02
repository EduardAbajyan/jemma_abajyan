export default function Pricing() {
  return (
    <div className="min-h-[calc(100vh-150px)] w-11/12 mb-5 *:bg-background text-foreground flex flex-col justify-center items-center gap-10">
      <h1 className="text-5xl font-bold font-armenian my-5">Գնացուցակ</h1>

      <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
        <table className="w-full text-sm text-left rtl:text-right text-body font-armenian">
          <thead className="bg-neutral-secondary-soft border-b border-default">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 font-medium text-3xl text-center"
              >
                Դիմահարդարում
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-medium text-3xl text-center"
              >
                Գինը սրահում
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-medium text-3xl text-center"
              >
                Գինը Ձեր տանը
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-heading whitespace-nowrap text-xl"
              >
                Ունքերի հարդարում
              </th>
              <td className="px-6 py-4 text-center">
                <span className="text-xl">1000</span>{" "}
                <span className="text-md"> դրամ</span>
              </td>
              <td className="px-6 py-4 text-center">
                <span className="text-xl">3000</span>{" "}
                <span className="text-md"> դրամ</span>
              </td>
            </tr>
            <tr className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-heading whitespace-nowrap text-xl"
              >
                Թարթիչների հարդարում
              </th>
              <td className="px-6 py-4 text-center">
                <span className="text-xl">3000</span>{" "}
                <span className="text-md"> դրամ</span>
              </td>
              <td className="px-6 py-4 text-center">
                <span className="text-xl">5000</span>{" "}
                <span className="text-md"> դրամ</span>
              </td>
            </tr>
            <tr className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-heading whitespace-nowrap text-xl"
              >
                Դիմահարդարում առանց թարթիչների հարդարման
              </th>
              <td className="px-6 py-4 text-center">
                <span className="text-xl">5000</span>{" "}
                <span className="text-md"> դրամ</span>
              </td>
              <td className="px-6 py-4 text-center">
                <span className="text-xl">7000</span>{" "}
                <span className="text-md"> դրամ</span>
              </td>
            </tr>
            <tr className="odd:bg-neutral-primary even:bg-neutral-secondary-soft border-b border-default">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-heading whitespace-nowrap text-xl"
              >
                Դիմահարդարում թարթիչներով
              </th>
              <td className="px-6 py-4 text-center">
                <span className="text-xl">8000</span>{" "}
                <span className="text-md"> դրամ</span>
              </td>
              <td className="px-6 py-4 text-center">
                <span className="text-xl">10000</span>{" "}
                <span className="text-md"> դրամ</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
