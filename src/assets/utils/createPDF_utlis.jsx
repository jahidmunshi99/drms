import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 10,
  },

  header: {
    textAlign: "center",
    marginBottom: 10,
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
  },

  subHeader: {
    fontSize: 10,
    marginTop: 5,
  },

  table: {
    width: "100%",
    marginTop: 10,
    border: "1px solid #000",
  },

  row: {
    flexDirection: "row",
    border: "1px 0px solid #000",
  },

  cell: {
    flex: 1,
    padding: 4,
    border: "0px 1px solid #000",
  },

  bold: {
    fontWeight: "bold",
  },

  section: {
    marginBottom: 10,
    border: "1px solid #ccc",
    padding: 6,
  },
});

export const CreatePDF = ({ data }) => {
  const firstItem = data?.[0];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.title}>Department of Agricultural Extension</Text>

          <Text style={styles.subHeader}>
            District: {firstItem?.districtId} | Financial Year:{" "}
            {firstItem?.f_year}
          </Text>

          <Text style={styles.subHeader}>
            Category: {firstItem?.category} | Session: {firstItem?.crop_session}{" "}
            | Type of Crop: {firstItem?.crop_type}
          </Text>
        </View>

        {/* MAIN TABLE */}
        {data.map((item, index) => (
          <View style={styles.section} key={index}>
            {/* VARIETIES SUB TABLE */}
            <View style={{ marginTop: 5 }}>
              <Text style={styles.bold}>Varieties:</Text>

              <View style={[styles.row, styles.bold]}>
                <Text style={styles.cell}>Name</Text>
                <Text style={styles.cell}>Target</Text>
                <Text style={styles.cell}>Achievement</Text>
                <Text style={styles.cell}>Type</Text>
              </View>

              {item.varieties?.map((v, i) => (
                <View style={styles.row} key={i}>
                  <Text style={styles.cell}>{v.name}</Text>
                  <Text style={styles.cell}>{v.target}</Text>
                  <Text style={styles.cell}>{v.achievement}</Text>
                  <Text style={styles.cell}>{v.category_of}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}
      </Page>
    </Document>
  );
};
