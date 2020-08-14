import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

//Import Section Title
import SectionTitle from "../common/section-title";

class Clients extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responsive: {
        576: {
          items: 1,
        },
      },
    };
  }

  render() {
    return (
      <React.Fragment>
        <section className="section bg-light" id="clients">
          <Container className="faq-content-container">
            <SectionTitle title="Tanya Jawab Tentang Simedis" />
            <Container>
              <Row className="">
                <Col lg={6} className="faq-content-left">
                  <h5>
                    <strong>Bagaimana cara membeli Asuransi Simedis? </strong>
                  </h5>
                  <p>
                    Daftar dan beli Asuransi Simedis untuk diri sendiri,
                    pasangan atau
                    <br />
                    keluargamu dengan mengikuti langkah-langkah berikut:
                  </p>
                  <p>
                    - Pilih plan yang sesuai dengan kebutuhan kamu
                    <br />- Isi data kamu sebagai Pemegang Polis dan data
                    Tertanggung
                    <br />- Pilih metode pembayaran
                    <br />- Masuk ke dashboard dan cek e-polis kamu
                  </p>
                  <h5>
                    <strong>Apa saja keuntungan dari program Simedis?</strong>
                    &nbsp;
                  </h5>
                  <p>
                    Dengan membeli Plan Simedis kamu akan mendapatkan poin:{" "}
                    <br />
                    Plan Individu : 1 poin <br />
                    Plan Pasangan : 2 poin <br />
                    Plan Keluarga : 3 poin <br />
                    Referensikan saudara, kerabat atau teman, kamu akan
                    mendapatkan: <br />
                    Per orang : 2 poin <br />
                    yang terhitung secara kelipatan, jadi semakin banyak kamu{" "}
                    <br />
                    mereferensikan temanmu semakin besar pula poin yang <br />
                    diperoleh.&nbsp;
                  </p>
                  <p>
                    Berapa nilai 1 poin Simedis? <br />1 poin senilai
                    Rp10.000&nbsp;
                  </p>

                  <h5>
                    <strong>
                      Bagaimana saya menggunakan poin Simedis? Masuk ke
                      dashboard proﬁl kamu&nbsp;
                    </strong>
                  </h5>
                  <p>
                    - Pilih menu poin <br />- Cek jumlah poin yang terkumpul{" "}
                    <br />- Pilih tukar poin lalu pilih hadiah yang kamu
                    inginkan: <br />- Voucher belanja Alfamart atau Indomaret{" "}
                    <br />- Voucher potongan harga Traveloka <br />- Voucher
                    potongan harga Gopay{" "}
                  </p>
                  <h5>
                    <strong>Kapan masa pertanggungan SImedis berakhir?</strong>
                  </h5>
                  <p>
                    Pertanggungan asuransi akan berakhir apabila (mana yang
                    terjadi lebih dulu):-Pertanggungan &nbsp;berakhir
                    &nbsp;sesuai tanggal &nbsp;yang &nbsp;tercantum &nbsp;dalam
                    Sertifikat Polis/Kepesertaan Asuransi, atau-Tertanggung
                    meninggal dunia, atau -Pertanggungan &nbsp;menjadi
                    &nbsp;batal &nbsp;baik &nbsp;atas &nbsp;pengajuan
                    &nbsp;Pemegang Polis maupun sebab lain, atau-Tertanggung
                    telahmelewati &nbsp; batas &nbsp; usia &nbsp; maksimum
                    &nbsp; yang dipertanggungkan, atau-Pemegang &nbsp;Polis
                    &nbsp;dan/atau &nbsp;Tertanggung Terbukti memberikan
                    keterangan/data &nbsp;palsu &nbsp;atau melakukan
                    penipuan/pemalsuan sehubungan &nbsp;dengan &nbsp;pendaftaran
                    &nbsp;asuransi &nbsp;atau &nbsp;klaim &nbsp;manfaat asuransi
                  </p>
                  <p>
                    <br />
                  </p>
                </Col>
                <Col lg={6} className="faq-content-right">
                  <h5>
                    <strong>
                      Apa saja Plan Simedis? <br />
                    </strong>
                  </h5>
                  <p>
                    <span>
                      <strong>Plan Individu </strong>
                    </span>
                    <br />
                    Tertanggung mendaftarkan dirinya sendiri dalam Produk
                    Asuransi &nbsp;
                  </p>
                  <p>
                    <span>
                      <strong>Plan Pasangan </strong>
                    </span>
                    <br />
                    Tertanggung mendaftarkan dirinya dan Pasangan Tertanggung
                    secara bersama-sama untuk satu Produk Asuransi dimana
                    Manfaat Asuransinya berlaku untuk masing-masing Tertanggung
                    dan Pasangan Tertanggung.&nbsp;
                  </p>
                  <p>
                    <span>
                      <strong>Plan Keluarga </strong>
                    </span>
                    <br />
                    Tertanggung mendaftarkan dirinya,Pasangan Tertanggung dan
                    anak-anaknya secara bersama-sama untuk satu Produk Asuransi
                    dimanaManfaat Asuransinya berlaku untuk masingmasing
                    Tertanggung
                  </p>
                  <p>&nbsp;</p>
                  <h5>
                    <strong>Apa saja ketentuan pengecualian Simedis?</strong>
                  </h5>
                  <p>
                    <span>
                      <strong>
                        Manfaat Meningggal Dunia karena Penyakit atau Kecelakaan
                        tidak akan dibayarkan jika:{" "}
                      </strong>
                    </span>
                    <br />
                    1.Tindakan bunuh diri.
                    <br />
                    2.Terlibat dalam perkelahian, kecuali sebagai pihak yang
                    mempertahankan diri.
                    <br />
                    3.Langsung ataupun tidak langsung dari tindakan
                    kejahatanatau penipuan yang dilakukan Tertanggung, Pasangan
                    Tertanggung dan/atau Ahli Waris.
                    <br />
                    4.Dihukum mati karena eksekusi berdasarkan Putusan
                    Pengadilan.
                    <br />
                    5.NAPZA (Narkotika, Psikotropika dan Zat Adiktif lain).
                    6.HIV/AIDS (Human Immunodeficiency Virus/Acquired Immune
                    Deficiency Syndrome)dan ARC (AIDS Related Complex).
                  </p>
                  <p>
                    <span>
                      <strong>
                        Manfaat &nbsp;SantunanRawat &nbsp;Inap &nbsp;Akibat
                        &nbsp;terinfeksi &nbsp;Virus &nbsp;COVID-19 tidak akan
                        dibayarkan jika:&nbsp;
                      </strong>
                    </span>
                    <br />
                    1.Tertanggung dirawat inap di Rumah sakit karena sebab lain
                    diluar infeksi Virus COVID-19 serta komplikasinya. <br />
                    2.Pernah disarankan dan/atau melakukan dan/atau sedang
                    menunggu hasil tes Virus COVID-19 sebelum tanggal penerbitan
                    Polis.(TBC &ndash;U/W &amp; Claim) <br />
                    3.Telah berstatus sebagai Pasien Dalam Pengawasan (PDP) atau
                    terkonfirmasi positif terinfeksi virus COVID-19 sebelum
                    tanggal penerbitan Polis
                  </p>
                </Col>
              </Row>
            </Container>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Clients;
