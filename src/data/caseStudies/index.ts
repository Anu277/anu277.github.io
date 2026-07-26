import type { CaseStudy } from '@/types/caseStudy'
import { ORIEON_CASE_STUDY } from '@/data/caseStudies/orieon'
import { BEAR_BEHAVIOR_RECOGNITION_CASE_STUDY } from '@/data/caseStudies/bear-behavior-recognition'
import { OCR_PLATFORM_MIGRATION_CASE_STUDY } from '@/data/caseStudies/ocr-platform-migration'
import { KITCHEN_PROCUREMENT_VERIFICATION_CASE_STUDY } from '@/data/caseStudies/kitchen-procurement-verification'
import { LEOPARD_AUTO_ANNOTATION_PIPELINE_CASE_STUDY } from '@/data/caseStudies/leopard-auto-annotation-pipeline'
import { INDUSTRIAL_ROBOT_BEHAVIOR_CLONING_CASE_STUDY } from '@/data/caseStudies/industrial-robot-behavior-cloning'
import { DEEPSTREAM_TENSORRT_OPTIMIZATION_CASE_STUDY } from '@/data/caseStudies/deepstream-tensorrt-optimization'
import { DATASET_LABELING_AUTOMATION_CASE_STUDY } from '@/data/caseStudies/dataset-labeling-automation'
import { AI_ANNOTATION_PLATFORM_CASE_STUDY } from '@/data/caseStudies/ai-annotation-platform'
import { PRODUCTION_RAG_PLATFORM_CASE_STUDY } from '@/data/caseStudies/production-rag-platform'
import { BACKEND_INFRASTRUCTURE_CASE_STUDY } from '@/data/caseStudies/backend-infrastructure'
import { FACE_SORTER_CASE_STUDY } from '@/data/caseStudies/face-sorter'
import { HAND_SIGN_RECOGNITION_CASE_STUDY } from '@/data/caseStudies/hand-sign-recognition'
import { MUSIC_RECOMMENDATION_SYSTEM_CASE_STUDY } from '@/data/caseStudies/music-recommendation-system'

export const CASE_STUDIES: Record<string, CaseStudy> = {
  orieon: ORIEON_CASE_STUDY,
  'bear-behavior-recognition': BEAR_BEHAVIOR_RECOGNITION_CASE_STUDY,
  'ocr-platform-migration': OCR_PLATFORM_MIGRATION_CASE_STUDY,
  'kitchen-procurement-verification': KITCHEN_PROCUREMENT_VERIFICATION_CASE_STUDY,
  'leopard-auto-annotation-pipeline': LEOPARD_AUTO_ANNOTATION_PIPELINE_CASE_STUDY,
  'industrial-robot-behavior-cloning': INDUSTRIAL_ROBOT_BEHAVIOR_CLONING_CASE_STUDY,
  'deepstream-tensorrt-optimization': DEEPSTREAM_TENSORRT_OPTIMIZATION_CASE_STUDY,
  'dataset-labeling-automation': DATASET_LABELING_AUTOMATION_CASE_STUDY,
  'ai-annotation-platform': AI_ANNOTATION_PLATFORM_CASE_STUDY,
  'production-rag-platform': PRODUCTION_RAG_PLATFORM_CASE_STUDY,
  'backend-infrastructure': BACKEND_INFRASTRUCTURE_CASE_STUDY,
  'face-sorter': FACE_SORTER_CASE_STUDY,
  'hand-sign-recognition': HAND_SIGN_RECOGNITION_CASE_STUDY,
  'music-recommendation-system': MUSIC_RECOMMENDATION_SYSTEM_CASE_STUDY,
}
