import React from 'react';
import { Document, Page } from 'react-pdf';
// eslint-disable-next-line import/no-unresolved
import SEO from '../components/Seo';

export default function Resume() {
  return (
    <div>
      <SEO
        title="Resume"
        description=""
        path="resume"
      />
      <Document
        style={{ marginTop: 100 }}
        file="../resume.pdf"
      >
        <div style={{
          paddingTop: 24,
          paddingBottom: 16,
        }}
        >
          <Page
            renderAnnotationLayer={false}
            pageNumber={1}
          />
        </div>
        <div style={{
          paddingBottom: 24,
        }}
        >
          <Page
            renderAnnotationLayer={false}
            pageNumber={2}
          />
        </div>

      </Document>
    </div>
  );
}
