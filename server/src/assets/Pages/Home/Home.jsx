import Card from "../../components/Card";

const Home = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {/* Card 1 */}
      <Card
        menu_title={"আবহাওয়া"}
        bg_color={"bg-gradient-to-r from-blue-500 to-blue-600"}
      />
      {/* Card 2 */}
      <Card
        menu_title={"একনজরে জেলার তথ্য"}
        bg_color={"bg-gradient-to-r from-green-500 to-green-600"}
      />

      {/* <!-- Card 3 --> */}
      <Card
        menu_title={"আবাদ ও উৎপাদন"}
        bg_color={"bg-gradient-to-r from-fuchsia-700 to-fuchsia-900"}
      />

      {/* <!-- Card 4 --> */}
      <Card
        menu_title={"কৃষি যন্ত্রপাতি"}
        bg_color={"bg-gradient-to-r from-indigo-500 to-purple-700"}
      />
      {/* <!-- Card 5 --> */}
      <Card
        menu_title={"প্রদর্শনী"}
        bg_color={"bg-gradient-to-r from-cyan-500 to-blue-500"}
      />

      {/* <!-- Card 6 --> */}
      <Card
        menu_title={"প্রণোদনা ও পুনর্বাসন"}
        bg_color={"bg-gradient-to-r from-indigo-500 to-indigo-700"}
      />

      {/* <!-- Card 7 --> */}
      <Card
        menu_title={"প্রকল্পসমূহ"}
        bg_color={"bg-gradient-to-r from-orange-500 to-orange-600"}
      />

      {/* <!-- Card 8 --> */}
      <Card
        menu_title={"সার ও কীটনাশক"}
        bg_color={"bg-gradient-to-r from-red-500 to-red-600"}
      />

      {/* <!-- Card 9 --> */}
      <Card
        menu_title={"কর্মকর্তা/কর্মচারী"}
        bg_color={"bg-gradient-to-r from-purple-500 to-purple-700"}
      />

      {/* <!-- Card 10 --> */}
      <Card
        menu_title={"কৃষক গ্রুপ"}
        bg_color={"bg-gradient-to-r from-purple-500 to-violet-700"}
      />

      {/* <!-- Card 11 --> */}
      <Card
        menu_title={"প্রশিক্ষণ"}
        bg_color={"bg-gradient-to-r from-lime-500 to-lime-600"}
      />

      {/* <!-- Card 12 --> */}
      <Card
        menu_title={"ক্ষয়ক্ষতি"}
        bg_color={"bg-gradient-to-r from-red-500 to-pink-500"}
      />

      {/* <!-- Card 13 --> */}
      <Card
        menu_title={"রিপোর্ট"}
        bg_color={"bg-gradient-to-b from-cyan-800 to-sky-950"}
      />

      {/* <!-- Card 14 --> */}
      <Card
        menu_title={"অন্যান্য"}
        bg_color={"bg-gradient-to-b from-cyan-700 to-sky-800"}
      />
    </section>
  );
};

export default Home;
