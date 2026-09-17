import { useState } from "react";
import { Disclosure } from "./components/Disclosure/Disclosure";
import { Tabs } from "./components/Tabs/Tabs";
import { Modal } from "./components/Modal/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div style={{ padding: "40px" }}>
      <Disclosure title="What is accessibility?">
        <p>
          Accessibility means making sure everyone, including people using
          screen readers or only a keyboard, can use your website.
        </p>
      </Disclosure>

      <hr style={{ margin: "40px 0" }} />

      <Tabs
        tabs={[
          { id: "tab1", label: "Home", content: <p>This is the Home panel.</p> },
          { id: "tab2", label: "Profile", content: <p>This is the Profile panel.</p> },
          { id: "tab3", label: "Settings", content: <p>This is the Settings panel.</p> },
        ]}
      />

      <hr style={{ margin: "40px 0" }} />

      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Sample Dialog"
      >
        <p>This is a modal dialog. Try pressing Tab to see the focus trap.</p>
        <input type="text" placeholder="Some input" />
      </Modal>
    </div>
  );
}

export default App;