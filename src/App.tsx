import React, { useEffect, useState } from "react";
import {
  Layout,
  Menu,
  Spin,
  Result,
  Progress,
  ConfigProvider,
  Drawer,
  Button,
  Grid,
} from "antd";
import {
  BookOutlined,
  TeamOutlined,
  BulbOutlined,
  CrownOutlined,
  CodeOutlined,
  SafetyCertificateOutlined,
  FlagOutlined,
  SyncOutlined,
  CheckSquareOutlined,
  CheckCircleFilled,
  MenuOutlined,
} from "@ant-design/icons";
import { fetchLessons } from "./api";
import { Lesson } from "./types";
import LessonView from "./components/LessonView";
import "./App.css";

const { Header, Content, Sider } = Layout;
const { useBreakpoint } = Grid;

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "BulbOutlined":
      return <BulbOutlined />;
    case "TeamOutlined":
      return <TeamOutlined />;
    case "CrownOutlined":
      return <CrownOutlined />;
    case "CodeOutlined":
      return <CodeOutlined />;
    case "SafetyCertificateOutlined":
      return <SafetyCertificateOutlined />;
    case "FlagOutlined":
      return <FlagOutlined />;
    case "SyncOutlined":
      return <SyncOutlined />;
    case "CheckSquareOutlined":
      return <CheckSquareOutlined />;
    default:
      return <BookOutlined />;
  }
};

const App: React.FC = () => {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentLessonId, setCurrentLessonId] = useState<string>("");
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const screens = useBreakpoint();
  const isMobile = screens.md === false; // True for smartphones and small tablets

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchLessons();
        setLessons(data);
        if (data.length > 0) setCurrentLessonId(data[0].id);
      } catch (error) {
        console.error("Failed to fetch lessons", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const handleComplete = () => {
    if (!completedLessons.includes(currentLessonId)) {
      setCompletedLessons([...completedLessons, currentLessonId]);
    }
  };

  const currentLesson = lessons.find((l) => l.id === currentLessonId);
  const progressPercent =
    Math.round((completedLessons.length / lessons.length) * 100) || 0;

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Spin size="large" />
      </div>
    );
  }

  const menuContent = (
    <>
      <div
        style={{
          padding: "24px 20px 8px 20px",
          fontWeight: 800,
          fontSize: "12px",
          textTransform: "uppercase",
          color: "#6B7280",
          letterSpacing: "1px",
        }}
      >
        Course Modules
      </div>
      <Menu
        mode="inline"
        selectedKeys={[currentLessonId]}
        onClick={(e) => {
          setCurrentLessonId(e.key);
          if (isMobile) setDrawerOpen(false); // Auto-close drawer on mobile selection
        }}
        style={{ borderRight: 0, padding: "8px 12px" }}
      >
        {lessons.map((lesson) => (
          <Menu.Item
            key={lesson.id}
            icon={getIcon(lesson.iconName)}
            style={{
              height: "auto",
              minHeight: "48px",
              lineHeight: "1.5",
              padding: "12px 16px",
              whiteSpace: "normal",
              marginBottom: "4px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontWeight: 600,
              }}
            >
              <span style={{ paddingRight: "12px" }}>{lesson.title}</span>
              {completedLessons.includes(lesson.id) && (
                <CheckCircleFilled
                  style={{ color: "#10B981", flexShrink: 0, fontSize: "16px" }}
                />
              )}
            </div>
          </Menu.Item>
        ))}
      </Menu>
    </>
  );

  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          colorPrimary: "#4F46E5",
          colorSuccess: "#10B981",
          colorError: "#EF4444",
          borderRadius: 12,
          colorTextBase: "#374151",
          colorTextHeading: "#111827",
        },
        components: {
          Menu: {
            itemBorderRadius: 8,
            itemHoverBg: "#EEF2FF",
            itemSelectedBg: "#EEF2FF",
            itemSelectedColor: "#4F46E5",
          },
          Card: {
            padding: isMobile ? 16 : 24,
          },
        },
      }}
    >
      <Layout style={{ minHeight: "100vh", overflowX: "hidden" }}>
        {/* Responsive Header */}
        <Header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
            color: "white",
            padding: isMobile ? "0 16px" : "0 32px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            zIndex: 10,
            height: isMobile ? "64px" : "72px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            {isMobile && (
              <Button
                type="text"
                icon={
                  <MenuOutlined style={{ color: "white", fontSize: "20px" }} />
                }
                onClick={() => setDrawerOpen(true)}
                style={{ marginRight: "12px", padding: 0 }}
              />
            )}
            <SafetyCertificateOutlined
              style={{
                marginRight: isMobile ? "8px" : "12px",
                fontSize: isMobile ? "24px" : "28px",
              }}
            />
            <span
              style={{
                fontSize: isMobile ? "18px" : "22px",
                fontWeight: "800",
                letterSpacing: "-0.5px",
                whiteSpace: "nowrap",
              }}
            >
              {isMobile ? "Scrum Prep" : "Scrum Master Prep"}
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              width: isMobile ? "120px" : "250px",
            }}
          >
            {!isMobile && (
              <span style={{ fontWeight: 600, fontSize: "14px" }}>
                Progress
              </span>
            )}
            <Progress
              percent={progressPercent}
              strokeColor="#34D399"
              trailColor="rgba(255,255,255,0.2)"
              showInfo={false}
              style={{ flex: 1, margin: 0 }}
            />
            <span style={{ fontWeight: 800, fontSize: "14px" }}>
              {progressPercent}%
            </span>
          </div>
        </Header>

        <Layout
          style={{
            padding: isMobile ? "16px" : "24px",
            gap: "24px",
            maxWidth: "1400px",
            margin: "0 auto",
            width: "100%",
          }}
        >
          {/* Render Sider on Desktop, Drawer on Mobile */}
          {isMobile ? (
            <Drawer
              placement="left"
              onClose={() => setDrawerOpen(false)}
              open={drawerOpen}
              bodyStyle={{ padding: 0 }}
              width={280}
            >
              {menuContent}
            </Drawer>
          ) : (
            <Sider
              width={300}
              style={{
                background: "#fff",
                borderRadius: "16px",
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)",
                overflow: "hidden",
              }}
            >
              {menuContent}
            </Sider>
          )}

          {/* Elevated Content Area */}
          <Content
            style={{
              padding: isMobile ? "24px 16px" : "40px 48px",
              margin: 0,
              minHeight: 280,
              background: "#fff",
              borderRadius: "16px",
              boxShadow:
                "0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)",
            }}
          >
            {currentLesson ? (
              <LessonView
                key={currentLesson.id}
                lesson={currentLesson}
                onComplete={handleComplete}
              />
            ) : (
              <Result status="404" title="Lesson not found" />
            )}
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
