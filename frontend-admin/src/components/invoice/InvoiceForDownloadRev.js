import {
  Document,
  Page,
  Image,
  Text,
  View,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';
import dayjs from 'dayjs';

import logoLight from '../../assets/img/logo/Logo.jpg';

Font.register({
  family: 'Open Sans',
  fonts: [
    {
      src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf',
    },
    {
      src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf',
      fontWeight: 600,
    },
  ],
});
Font.register({
  family: 'DejaVu Sans',
  fonts: [
    {
      src: 'https://kendo.cdn.telerik.com/2017.2.621/styles/fonts/DejaVu/DejaVuSans.ttf',
    },
    {
      src: 'https://kendo.cdn.telerik.com/2017.2.621/styles/fonts/DejaVu/DejaVuSans-Bold.ttf',
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    marginright: 10,
    marginBottom: 20,
    marginLeft: 10,
    paddingTop: 30,
    paddingLeft: 10,
    paddingRight: 60,
    lineHeight: 1.5,
  },
  table: {
    display: 'table',
    width: 'auto',
    color: '#4b5563',
  },
  tableRow: {
    margin: 'auto',
    flexDirection: 'row',
  },
  tableCol: {
    width: '15%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0.5,
    borderTopWidth: 0.5,
    borderColor: '#d1d5db',
  },
  tableCell: {
    margin: 'auto',
    marginTop: 5,
    fontSize: 10,
  },

  invoiceFirst: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 20,
    borderBottom: 0.5,
  },
  invoiceSecond: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingBottom: 20,
  },
  invoiceThird: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingBottom: 20,
  },
  logo: {
    width: 220,
    height: 16,
    bottom: 5,
  },
  title: {
    color: '#111827',
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
    fontSize: 13,
  },
  info: {
    fontSize: 10,
    color: '#374151',
  },
  amount: {
    fontSize: 10,
    color: '#ef4444',
  },
  status: {
    color: '#10b981',
  },
  quantity: {
    color: '#1f2937',
  },
  header: {
    color: '#111827',
    fontSize: 11,
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
  },
});

const InvoiceForDownloadRev = ({ data }) => {
  return (
    <>
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.invoiceFirst}>
            <View>
              <Text style={{ fontFamily: 'Open Sans', fontWeight: 'bold' }}>
                INVOICE
              </Text>
              <Text style={styles.info}>
                Status :{' '}
                {data.status === 'Pending' && (
                  <span style={{ color: '#eab308' }}>{data.status}</span>
                )}
                {data.status === 'Processing' && (
                  <span style={{ color: '#14b8a6' }}>{data.status}</span>
                )}
                {data.status === 'Completed' && (
                  <span style={{ color: '#22c55e' }}>{data.status}</span>
                )}
                {data.status === 'Cancel' && (
                  <span style={{ color: '#f43f5e' }}>{data.status}</span>
                )}
              </Text>
            </View>
            <View>
              <Image style={styles.logo} src={logoLight} />
              <Text style={styles.info}>
                No 81, Mallawapitiya, Kurunegala,
              </Text>
              <Text style={styles.info}> 0775866505</Text>
            </View>
          </View>

          <View style={styles.invoiceSecond}>
            <View>
              <Text style={styles.title}>DATE</Text>
              <Text style={styles.info}>
                {data.createdAt !== undefined && (
                  <span>{dayjs(data?.createdAt).format('MMMM D, YYYY')}</span>
                )}
              </Text>
            </View>
            <View>
              <Text style={styles.title}>INVOICE NO</Text>
              <Text style={styles.info}>#10012</Text>
            </View>
            <View>
              <Text style={styles.title}>INVOICE TO</Text>
              <Text style={styles.info}>{data.user}</Text>
              <Text style={styles.info}> {data.email}</Text>
            </View>
            <View>
              <Text style={styles.title}>Vehicle Make</Text>
              <Text style={styles.title}>Vehicle Model</Text>
              <Text style={styles.info}> {data.vehicleModel}</Text>
              <Text style={styles.title}>Vehicle No</Text>
              <Text style={styles.info}>{data.vehicleNo}</Text>
              <Text style={styles.title}>Vehicle Type</Text>
              <Text style={styles.info}> {data.vehicleType}</Text>
            </View>
            <View>
              <Text style={styles.title}>Service Type</Text>
              <Text style={styles.info}>{data.serviceType}</Text>
              <Text style={styles.title}>Service Slot</Text>
              <Text style={styles.info}> {data.slot}</Text>
              <Text style={styles.title}>Service Started at</Text>
              <Text style={styles.info}>{data.startTime}</Text>
            </View>
          </View>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  <span style={styles.header}>Sr.</span>
                </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  <span style={styles.header}>Product Name</span>
                </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  <span style={styles.header}>Quantity</span>
                </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  <span style={styles.header}>Item Price</span>
                </Text>
              </View>

              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  {' '}
                  <span style={styles.header}>Amount</span>
                </Text>
              </View>
            </View>
            {data?.cart?.map((item, i) => (
              <View key={i} style={styles.tableRow}>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{i + 1} </Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>{item.title} </Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>
                    {' '}
                    <span style={styles.quantity}>{item.quantity}</span>{' '}
                  </Text>
                </View>
                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>
                    {' '}
                    <span style={styles.quantity}>Rs. {item.price}.00</span>{' '}
                  </Text>
                </View>

                <View style={styles.tableCol}>
                  <Text style={styles.tableCell}>
                    <span style={styles.amount}>Rs. {item.itemTotal}.00</span>{' '}
                  </Text>
                </View>
              </View>
            ))}
          </View>

          <View style={styles.invoiceThird}>
            <View>
              <Text style={styles.title}> Payment Method</Text>
              <Text style={styles.info}> {data.paymentMethod} </Text>
            </View>
            <View>
              <Text style={styles.title}>Discount</Text>
              <Text style={styles.info}> Rs. {Math.round(data.discount)}.00</Text>
            </View>

            <View>
              <Text style={styles.title}>Total Amount</Text>
              <Text style={styles.amount}>Rs. {Math.round(data.total)}.00</Text>
            </View>
          </View>
        </Page>
      </Document>
    </>
  );
};

export default InvoiceForDownloadRev;
