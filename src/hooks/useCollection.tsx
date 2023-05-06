import { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  onSnapshot,
  collection,
  query,
  DocumentData,
  Query,
} from "firebase/firestore";

interface Channels {
  id: string;
  channel: DocumentData;
}

const useCollection = (data: string) => {
  const [documents, setDocuments] = useState<Channels[]>([]);
  const collectionRef: Query<DocumentData> = query(collection(db, data));

  useEffect(() => {
    onSnapshot(collectionRef, (querySnapShot) => {
      const channelsResults: Channels[] = [];
      querySnapShot.docs.forEach((doc) =>
        channelsResults.push({
          id: doc.id,
          channel: doc.data(),
        })
      );
      setDocuments(channelsResults);
    });
  }, []);

  return { documents };
};

export default useCollection;
