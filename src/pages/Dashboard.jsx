function Dashboard() {
  const isLogin = localStorage.getItem("isLogin");
  if (!isLogin) {
    window.location.href = "/login";
    return;
  }

  return (
    <div>
      <h1>¡Bienvenido!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga hic
        perspiciatis, quo suscipit atque libero quaerat incidunt tempore.
        Repudiandae porro blanditiis unde deserunt, maxime officia provident
        soluta laudantium doloremque vitae dolores, consequuntur earum maiores
        incidunt nihil minima impedit, pariatur et perferendis saepe. Ipsa
        possimus, obcaecati dignissimos minima iure quas sapiente sequi! Nulla
        alias consectetur similique quos quasi cupiditate, sed maiores odio
        eligendi eos quae ipsum, neque libero blanditiis exercitationem minima
        ullam quidem quibusdam reprehenderit et autem dolorem sunt? Minus modi
        officia reprehenderit aut adipisci incidunt tempora quia at natus, nulla
        libero, nostrum nobis qui ducimus quasi ut cumque facilis vel quas
        laudantium laborum et cum omnis? Delectus architecto, qui vel enim vitae
        velit vero ipsum quisquam ipsam itaque blanditiis voluptatum quia modi
        quae, placeat perspiciatis dolores repudiandae. Corrupti repellat ullam
        expedita earum et esse laboriosam hic corporis, id, recusandae a
        eligendi. Rem hic quam, ex ipsa consequuntur assumenda quisquam porro
        eum, eveniet quod officiis enim earum, nesciunt fuga laudantium dolore
        nisi debitis neque ducimus molestias rerum corrupti dicta. Debitis, odio
        incidunt. Eos corrupti placeat, temporibus quidem illo quibusdam,
        provident doloribus aut magnam eius totam repellendus quaerat quas
        deserunt dolores rem repudiandae? Eum similique expedita aliquid dolores
        aut commodi ab molestias nostrum dolore laboriosam. Iusto, sit
        exercitationem! Velit laborum nesciunt, ipsum sequi, fuga omnis deleniti
        magnam reprehenderit nostrum voluptate corrupti. Perferendis enim non
        cum minus quibusdam repudiandae ipsa excepturi dicta voluptatum odio.
        Incidunt consequuntur architecto vitae nihil aut quasi officia illo
        dolorum fugiat delectus, nesciunt repellat tenetur, eius explicabo
        molestias. Perferendis eveniet quos tempora reprehenderit asperiores
        autem dicta minus dolor laboriosam nam sint cum blanditiis nobis saepe,
        veritatis minima iste harum excepturi repudiandae exercitationem
        voluptatem voluptatibus deserunt ex ducimus. Nobis sit at voluptatibus
        voluptates, molestiae totam doloribus quasi nemo soluta quae repellendus
        amet labore ducimus, consequatur sapiente temporibus facere recusandae
        voluptatem.
      </p>
    </div>
  );
}

export default Dashboard;
